# AGENTS.md

给在这个仓库里干活的 AI 和人看的说明。

## 目标

Rei 的个人网站 https://me.rei8t.dev ：主页、项目、关于三页。第一要求是简洁、克制、大方。

## 边界

- 纯静态站：没有登录、没有后端数据、没有统计。
- 不加花哨动画和装饰图，留白优先。

## 技术栈

- React + Vite + TypeScript，**只用 pnpm**，不用 npm（只提交 `pnpm-lock.yaml`）。
- Radix Themes：排版、颜色 token、布局。强调色 gray，灰阶 slate。用到新颜色时在 `src/index.css` 里补对应的 token 文件。
- shadcn/ui：只补 Radix Themes 没有的组件，放 `src/components/ui/`，配置见 `components.json`。
- Tailwind v4：只引入 theme 和 utilities，**不引入 preflight**。颜色优先用 Radix 变量，比如 `text-[var(--gray-11)]`。
- 图标：Lucide。
- 明暗：跟随系统（`src/lib/use-system-appearance.ts`）。
- 路由：react-router。
- 部署：`dist/` 由 `scripts/build-inline-assets.mjs` 内联进 `worker/index.ts`（用 API Token 部署时 Static Assets 上传会 401）。Worker 对没有扩展名的路径返回 index.html，`/assets/*` 长缓存。
- 语言：zh、en、es、pt、ru、ja、de、fr、id，默认 zh；浏览器语言自动匹配，`?lang=xx` 可指定，选择存在 localStorage。

## 目录

```
src/
  main.tsx              入口、路由、Theme
  components/Layout.tsx 页头、导航、语言菜单、页脚
  pages/                Home / Projects / About / NotFound
  content/projects.ts   项目列表（只放链接）
  i18n/locales.ts       语言列表
  i18n/messages/*.ts    每种语言的全部文字，zh.ts 定类型
worker/index.ts         返回内联文件的 Worker
  lib/                  工具函数
```

## 命令

- `pnpm dev` 本地开发
- `pnpm build` 类型检查 + 构建
- `pnpm run deploy` 构建、内联并部署（Worker 名 `self-intro`，自定义域名 `me.rei8t.dev`）

## 约定

- 每轮改完都 commit 并 push 到 `main`。
- 中文文案要像人说话：少被动、少「进行」「通过」「作为」，短句。
- 改文字时 9 种语言一起改，不留空；先改 `zh.ts`。
- 发版（打 tag）前先问 Rei。

## 禁止

- 不提交密钥、`.dev.vars`、部署 key。
- 不加统计、追踪脚本。

更多：`docs/PRODUCT.md`、`.agents/`。
