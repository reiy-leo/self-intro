// 纯静态站：文件在构建时内联进 Worker（见 scripts/build-inline-assets.mjs）。
import { INLINE_ASSETS } from "./assets.generated";

function decode(a: { b: boolean; d: string }): BodyInit {
  if (!a.b) return a.d;
  return Uint8Array.from(atob(a.d), (c) => c.charCodeAt(0));
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("405 方法不允许", { status: 405 });
    }
    const { pathname } = new URL(request.url);
    let asset = INLINE_ASSETS[pathname];
    let status = 200;
    if (!asset) {
      // 没有扩展名的路径交给前端路由；带扩展名但找不到的才算 404。
      if (/\.[a-z0-9]+$/i.test(pathname)) return new Response("404 找不到", { status: 404 });
      asset = INLINE_ASSETS["/index.html"];
    }
    const headers = new Headers({
      "content-type": asset.t,
      "cache-control": pathname.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
    });
    return new Response(request.method === "HEAD" ? null : decode(asset), { status, headers });
  },
};
