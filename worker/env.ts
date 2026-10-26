export interface Env {
  DB: D1Database;
  // secrets
  SESSION_SECRET?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  // vars
  /** 管理员 Google 邮箱，逗号分隔。只有这些邮箱能登录。 */
  ADMIN_EMAILS?: string;
}

export const googleConfigured = (env: Env) => Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET && env.SESSION_SECRET);
const list = (v: string | undefined) => (v ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
export const isAdminEmail = (env: Env, email: string) => list(env.ADMIN_EMAILS).includes(email.toLowerCase());
