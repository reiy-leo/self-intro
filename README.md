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
pnpm deploy    # 构建并部署到 Cloudflare
```

## 改内容

- 项目列表：`src/content/projects.ts`
- 关于页：`src/content/about.ts`
- 界面文字和语言：`src/i18n/locales.ts`

## 许可证

MIT
