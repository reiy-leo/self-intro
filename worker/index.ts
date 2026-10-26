// 静态页面在构建时内联进 Worker（见 scripts/build-inline-assets.mjs）。
// 动态部分只有推荐邀请：/api/*、/go/:id、/auth/*。
import { INLINE_ASSETS } from "./assets.generated";
import type { Env } from "./env";
import { callback, getUser, login, logout } from "./auth";
import { bad, createInvite, deleteInvite, go, json, listInvites, updateInvite } from "./invites";

function decode(a: { b: boolean; d: string }): BodyInit {
  if (!a.b) return a.d;
  return Uint8Array.from(atob(a.d), (c) => c.charCodeAt(0));
}

function serveAsset(request: Request, pathname: string): Response {
  if (request.method !== "GET" && request.method !== "HEAD") return new Response("405 方法不允许", { status: 405 });
  let asset = INLINE_ASSETS[pathname];
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
  return new Response(request.method === "HEAD" ? null : decode(asset), { status: 200, headers });
}

/** 写操作要求同源，防跨站请求。 */
function sameOrigin(req: Request) {
  const origin = req.headers.get("Origin");
  return !origin || origin === new URL(req.url).origin;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    if (pathname === "/auth/login" && method === "GET") return login(request, env);
    if (pathname === "/auth/callback" && method === "GET") return callback(request, env);
    if (pathname === "/auth/logout" && method === "POST") return logout(request);

    const goMatch = pathname.match(/^\/go\/([A-Za-z0-9]+)$/);
    if (goMatch && method === "GET") return go(env, goMatch[1]!);

    if (pathname.startsWith("/api/")) {
      if (pathname === "/api/me" && method === "GET") return json({ user: await getUser(request, env) });
      if (pathname === "/api/invites" && method === "GET") return listInvites(env);

      const user = await getUser(request, env);
      if (!user) return bad("401 需要登录", 401);
      if (!sameOrigin(request)) return bad("403 禁止访问", 403);
      if (pathname === "/api/invites" && method === "POST") return createInvite(request, env);
      const m = pathname.match(/^\/api\/invites\/([A-Za-z0-9]+)$/);
      if (m && method === "PUT") return updateInvite(request, env, m[1]!);
      if (m && method === "DELETE") return deleteInvite(env, m[1]!);
      return bad("404 找不到", 404);
    }

    return serveAsset(request, pathname);
  },
};
