export type Locale = "zh" | "en";

export const LOCALES: { code: Locale; label: string; htmlLang: string }[] = [
  { code: "zh", label: "简体中文", htmlLang: "zh-CN" },
  { code: "en", label: "English", htmlLang: "en" },
];

export const DEFAULT_LOCALE: Locale = "zh";

const zh = {
  nav: { home: "主页", projects: "项目", about: "关于" },
  language: "语言",
  home: {
    greeting: "你好，我是 Rei。",
    intro: "我喜欢自己动手做小工具：浏览器扩展、桌面应用、跑在 Cloudflare 上的小网站。数据尽量留在你自己手里。",
    seeProjects: "看看我做的项目",
    aboutMe: "更多关于我",
  },
  projects: {
    title: "项目",
    lead: "这些是我正在做、也在自己用的东西。",
    site: "网站",
    source: "源码",
  },
  about: {
    title: "关于",
  },
  footer: { license: "代码以 MIT 许可证开源" },
  notFound: { title: "页面不存在", back: "回到主页" },
};

export type Messages = typeof zh;

const en: Messages = {
  nav: { home: "Home", projects: "Projects", about: "About" },
  language: "Language",
  home: {
    greeting: "Hi, I'm Rei.",
    intro: "I like building small tools for myself: browser extensions, desktop apps, and little sites on Cloudflare. Your data should stay in your hands.",
    seeProjects: "See my projects",
    aboutMe: "More about me",
  },
  projects: {
    title: "Projects",
    lead: "Things I'm building and using every day.",
    site: "Website",
    source: "Source",
  },
  about: {
    title: "About",
  },
  footer: { license: "Source code under the MIT License" },
  notFound: { title: "Page not found", back: "Back home" },
};

export const MESSAGES: Record<Locale, Messages> = { zh, en };
