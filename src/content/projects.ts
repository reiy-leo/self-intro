import type { Locale } from "@/i18n/locales";

export type Project = {
  name: string | Record<Locale, string>;
  summary: Record<Locale, string>;
  site?: string;
  repo?: string;
};

// 草稿：等 Rei 确认 Projects 页的来源后再定稿。
export const PROJECTS: Project[] = [
  {
    name: "Navill",
    summary: {
      zh: "浏览器扩展，把标签页和收藏整理成工作区，数据同步到你自己的 Google Drive 或 WebDAV。",
      en: "A browser extension that organizes tabs and bookmarks into workspaces, synced to your own Google Drive or WebDAV.",
    },
    site: "https://navill.rei8t.dev",
    repo: "https://github.com/reiy-leo/navill",
  },
  {
    name: "Mimatory",
    summary: {
      zh: "本地优先的密码库，数据加密后只存在你的设备和你自己的云盘里。",
      en: "A local-first password vault. Your data is encrypted and lives only on your devices and your own cloud storage.",
    },
    site: "https://mimatory.rei8t.dev",
    repo: "https://github.com/reiy-leo/mimatory",
  },
  {
    name: "Reicky",
    summary: {
      zh: "跨平台的桌面便签，像 macOS 的便笺一样轻，便签只归档不删除。",
      en: "A cross-platform desktop sticky-note app, as light as macOS Stickies. Notes are archived, never deleted.",
    },
    repo: "https://github.com/reiy-leo/reicky",
  },
  {
    name: { zh: "你的数据你负责", en: "Your Data, Your Responsibility" },
    summary: {
      zh: "一页宣言，讲我为什么让数据留在用户自己手里，并列出照这个原则做的应用。",
      en: "A one-page manifesto on keeping data in users' own hands, plus the apps built that way.",
    },
    site: "https://your-data-is-your-responsibility.rei8t.dev",
    repo: "https://github.com/reiy-leo/ydiyr",
  },
];
