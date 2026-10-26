# self-intro

Rei 的个人网站，地址 https://me.rei8t.dev 。三页：主页、项目、关于。

## 技术栈

- React + Vite + TypeScript，用 pnpm 管理依赖
- Radix Themes 管排版、颜色和布局；只有 Themes 没有的组件才用 shadcn/ui
- Tailwind 只开 theme 和 utilities，不开 preflight，免得和 Radix 打架
- 图标用 Lucide
- 明暗跟随系统
- 部署在 Cloudflare Workers（纯静态资源）

## 常用命令

```bash
pnpm install
pnpm dev       # 本地开发
pnpm build     # 构建到 dist/
pnpm run deploy  # 构建、内联进 Worker 并部署到 Cloudflare
```

## 改内容

- 项目列表（链接）：`src/content/projects.ts`
- 所有文字（界面、项目说明、关于页）：`src/i18n/messages/<语言>.ts`，以 `zh.ts` 为准
- 支持 9 种语言：zh、en、es、pt、ru、ja、de、fr、id。默认中文，按浏览器语言自动选，也可以在链接后加 `?lang=ja` 指定

## 许可证

MIT
