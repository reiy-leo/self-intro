const messages = {
  "nav": {
    "home": "主页",
    "projects": "项目",
    "about": "关于"
  },
  "language": "语言",
  "home": {
    "greeting": "你好，我是 Rei。",
    "intro": "我喜欢给自己做小工具：浏览器扩展、桌面应用，还有跑在 Cloudflare 上的小网站。数据尽量留在你自己手里。",
    "seeProjects": "看看我做的项目",
    "aboutMe": "更多关于我"
  },
  "projects": {
    "title": "项目",
    "lead": "这些是我正在做、自己也天天在用的东西。",
    "site": "网站",
    "source": "源码",
    "names": {
      "ydiyr": "你的数据你负责"
    },
    "summaries": {
      "navill": "浏览器扩展。把书签一次导进来，整理成「工作区 → 抽屉 → 书签」，打开新标签页就能用。可同步到你自己的 Google Drive。",
      "mimatory": "Mac 上的加密密码管理器，能在浏览器里一键填密码，想同步时走你自己的 Google Drive 或 WebDAV。",
      "reicky": "跨平台的桌面便签，像 macOS 自带的便笺一样轻。便签只归档，不删除。",
      "ydiyr": "一页宣言：讲我为什么让数据留在用户自己手里，也列出照这个原则做的应用。"
    }
  },
  "about": {
    "title": "关于",
    "paragraphs": [
      "我是 Rei，一个爱折腾工具的开发者。",
      "平时写浏览器扩展、桌面应用，也在 Cloudflare 上搭些小网站。做东西时我最在意两件事：用着顺手，数据留在用户自己手里。",
      "我的应用不设账号，不收集使用数据。要同步，就走你自己的 Google Drive 或 WebDAV。"
    ],
    "github": "在 GitHub 上找我"
  },
  "footer": {
    "license": "代码以 MIT 许可证开源"
  },
  "notFound": {
    "title": "页面不存在",
    "back": "回到主页"
  }
};

export type Messages = typeof messages;

export default messages;
