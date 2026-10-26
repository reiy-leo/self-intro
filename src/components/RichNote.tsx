// 用 Pretext（@chenglou/pretext）排一段带 chip 和代码片段的文字，样式参考 chenglou.me/pretext/rich-note。
// 文案写法：[[身份]] 是 chip，`C#` 是代码片段，其余是正文。
// chip 整块不折行；正文和代码照常折行。Pretext 算好每一行放哪些片段，我们按行画出来。
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  materializeRichInlineLineRange,
  prepareRichInline,
  walkRichInlineLineRanges,
  type RichInlineItem,
} from "@chenglou/pretext/rich-inline";

const FAMILY = '"Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans", "Hiragino Sans GB", "Noto Sans CJK SC", "Noto Sans CJK JP", "Microsoft YaHei", sans-serif';
const BODY_FONT = `400 17px ${FAMILY}`;
const CHIP_FONT = `600 13px ${FAMILY}`;
const CODE_FONT = '500 14px "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace';
const LINE_HEIGHT = 34;
const CHIP_PAD = 10;
const CHIP_MARGIN = 3;
const CODE_PAD = 6;
const TONES = 6;

type Kind = "body" | "chip" | "code";
type Spec = { kind: Kind; text: string; tone: number };

function parse(src: string): Spec[] {
  const out: Spec[] = [];
  const re = /\[\[(.+?)\]\]|`(.+?)`/g;
  let last = 0;
  let chip = 0;
  for (let m; (m = re.exec(src)); ) {
    if (m.index > last) out.push({ kind: "body", text: src.slice(last, m.index), tone: 0 });
    if (m[1] !== undefined) out.push({ kind: "chip", text: m[1], tone: chip++ % TONES });
    else out.push({ kind: "code", text: m[2]!, tone: 0 });
    last = re.lastIndex;
  }
  if (last < src.length) out.push({ kind: "body", text: src.slice(last), tone: 0 });
  return out;
}

const fontOf = (k: Kind) => (k === "chip" ? CHIP_FONT : k === "code" ? CODE_FONT : BODY_FONT);
const classOf = (s: Spec) => (s.kind === "chip" ? `rn-chip rn-tone-${s.tone}` : s.kind === "code" ? "rn-code" : "rn-body");

type Frag = { item: number; text: string; gap: number };
type Line = Frag[];

/** Pretext 不可用（字体没好、宽度为 0）时的降级：普通内联排版。 */
function Plain({ specs }: { specs: Spec[] }) {
  return (
    <p className="rn-plain">
      {specs.map((s, i) => (
        <span key={i} className={classOf(s)} style={{ font: fontOf(s.kind) }}>
          {s.text}
        </span>
      ))}
    </p>
  );
}

export function RichNote({ source }: { source: string }) {
  const specs = useMemo(() => parse(source), [source]);
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let alive = true;
    document.fonts.ready.then(() => alive && setFontsReady(true));
    return () => {
      alive = false;
    };
  }, []);

  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const prepared = useMemo(() => {
    if (!fontsReady) return null;
    const items: RichInlineItem[] = specs.map((s) =>
      s.kind === "chip"
        ? { text: s.text, font: CHIP_FONT, break: "never", extraWidth: CHIP_PAD * 2 + CHIP_MARGIN * 2 }
        : s.kind === "code"
          ? { text: s.text, font: CODE_FONT, extraWidth: CODE_PAD * 2 }
          : { text: s.text, font: BODY_FONT },
    );
    return prepareRichInline(items);
  }, [specs, fontsReady]);

  const lines = useMemo(() => {
    if (!prepared || width <= 0) return null;
    const out: Line[] = [];
    walkRichInlineLineRanges(prepared, width, (range) => {
      const line = materializeRichInlineLineRange(prepared, range);
      out.push(line.fragments.map((f) => ({ item: f.itemIndex, text: f.text, gap: f.gapItemIndex })));
    });
    return out;
  }, [prepared, width]);

  return (
    <div ref={box} className="rich-note">
      {lines ? (
        <div style={{ height: lines.length * LINE_HEIGHT, position: "relative" }}>
          {lines.map((line, li) => (
            <div key={li} className="rn-line" style={{ top: li * LINE_HEIGHT, lineHeight: `${LINE_HEIGHT}px`, font: BODY_FONT }}>
              {line.map((f, fi) => {
                const s = specs[f.item]!;
                // 折叠掉的空格画在测量它的那个片段里：本片段自己的，或前一个片段的。
                const lead = f.gap === f.item ? " " : "";
                const trail = line[fi + 1] && line[fi + 1]!.gap === f.item && line[fi + 1]!.item !== f.item ? " " : "";
                return (
                  <span key={fi} className={classOf(s)} style={{ font: fontOf(s.kind) }}>
                    {lead}
                    {f.text}
                    {trail}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
        <Plain specs={specs} />
      )}
    </div>
  );
}
