import type { Messages } from "@/i18n/locales";

type ProjectId = keyof Messages["projects"]["summaries"];

export type Project = {
  id: ProjectId;
  /** 名字不随语言变时直接写；要翻译的写在 messages 的 projects.names 里。 */
  name?: string;
  site?: string;
  repo?: string;
};

// 手选列表（Rei 2026-10-26 确认）。说明文字在 src/i18n/messages/*.ts。
export const PROJECTS: Project[] = [
  { id: "navill", name: "Navill", site: "https://navill.rei8t.dev", repo: "https://github.com/reiy-leo/navill" },
  { id: "mimatory", site: "https://mimatory.rei8t.dev", repo: "https://github.com/reiy-leo/mimatory" },
  { id: "reicky", site: "https://reicky.rei8t.dev", repo: "https://github.com/reiy-leo/reicky" },
  {
    id: "ydiyr",
    site: "https://your-data-is-your-responsibility.rei8t.dev",
    repo: "https://github.com/reiy-leo/ydiyr",
  },
  { id: "mindough", site: "https://mindough.rei8t.dev", repo: "https://github.com/reiy-leo/Mindough" },
  { id: "sideDock", repo: "https://github.com/reiy-leo/side-dock" },
  { id: "melodyKeeeys", repo: "https://github.com/reiy-leo/melody-keeeys" },
  {
    id: "vectorWallpapers",
    site: "https://vector-wallpapers.rei8t.dev",
    repo: "https://github.com/reiy-leo/vector-wallpapers",
  },
];
