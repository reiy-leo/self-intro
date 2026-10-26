// 推荐邀请：公开列表 + 管理员增删改 + 点击计数跳转。
import type { Env } from "./env";

export interface Invite { id: string; title: string; url: string; intro: string; clicks: number; created_at: number; updated_at: number }

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

export const bad = (msg: string, status = 400) => json({ error: msg }, status);

function clean(body: unknown): { title: string; url: string; intro: string } | string {
  if (!body || typeof body !== "object") return "400 请求格式不对";
  const b = body as Record<string, unknown>;
  const title = String(b.title ?? "").trim().slice(0, 80);
  const intro = String(b.intro ?? "").trim().slice(0, 300);
  const url = String(b.url ?? "").trim();
  if (!title) return "标题不能为空";
  try {
    const u = new URL(url);
    if (u.protocol !== "https:" && u.protocol !== "http:") return "链接要以 http 或 https 开头";
  } catch {
    return "链接格式不对";
  }
  if (url.length > 2000) return "链接太长";
  return { title, url, intro };
}

export async function listInvites(env: Env) {
  const { results } = await env.DB.prepare("SELECT id, title, url, intro, clicks, created_at, updated_at FROM invites ORDER BY created_at DESC").all<Invite>();
  return json({ invites: results });
}

export async function createInvite(req: Request, env: Env) {
  const v = clean(await req.json().catch(() => null));
  if (typeof v === "string") return bad(v);
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 10);
  const now = Date.now();
  await env.DB.prepare("INSERT INTO invites (id, title, url, intro, clicks, created_at, updated_at) VALUES (?, ?, ?, ?, 0, ?, ?)")
    .bind(id, v.title, v.url, v.intro, now, now).run();
  return json({ id }, 201);
}

export async function updateInvite(req: Request, env: Env, id: string) {
  const v = clean(await req.json().catch(() => null));
  if (typeof v === "string") return bad(v);
  const r = await env.DB.prepare("UPDATE invites SET title = ?, url = ?, intro = ?, updated_at = ? WHERE id = ?")
    .bind(v.title, v.url, v.intro, Date.now(), id).run();
  return r.meta.changes ? json({ ok: true }) : bad("404 找不到", 404);
}

export async function deleteInvite(env: Env, id: string) {
  await env.DB.prepare("DELETE FROM invites WHERE id = ?").bind(id).run();
  return json({ ok: true });
}

/** GET /go/:id → 点击数 +1，302 到邀请链接。 */
export async function go(env: Env, id: string) {
  const row = await env.DB.prepare("UPDATE invites SET clicks = clicks + 1 WHERE id = ? RETURNING url").bind(id).first<{ url: string }>();
  if (!row) return new Response(null, { status: 302, headers: { Location: "/invites" } });
  return new Response(null, { status: 302, headers: { Location: row.url, "cache-control": "no-store", "referrer-policy": "no-referrer" } });
}

export { json };
