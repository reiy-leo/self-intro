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
    "intro": "我是 Rei。平时和基因数据、医疗法规打交道，空下来就给自己做些小工具。",
    "rolesTitle": "我身上大概有这几个身份：",
    "roles": [
      {
        "name": "合规翻译官",
        "desc": "把医疗器械法规讲成工程师听得懂的话，再陪产品一步步走完注册。"
      },
      {
        "name": "质量较真人",
        "desc": "写 SOP、做检查清单、跟进整改。审核来的时候，我们早就准备好了。"
      },
      {
        "name": "项目牧羊人",
        "desc": "拆需求、排进度，让研发、临床和生信朝同一个方向走。"
      },
      {
        "name": "先画图的产品人",
        "desc": "先把原型和数据库想清楚，再动手写代码。"
      },
      {
        "name": "全栈多面手",
        "desc": "C#、Python、Docker、数据库都写，项目缺什么，我就补什么。"
      },
      {
        "name": "测序数据侦探",
        "desc": "在 DNA-seq 数据里找出突变，也顺手让分析流程跑得更快。"
      }
    ],
    "outro": "我的应用不设账号，也不收集使用数据。你的数据只放在你自己的设备和云盘里。",
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
