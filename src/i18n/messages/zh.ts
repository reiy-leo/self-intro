const messages = {
  "nav": {
    "home": "主页",
    "projects": "项目",
    "about": "关于",
    "invites": "推荐邀请"
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
      "我是 Rei。平时和基因数据、医疗法规打交道，空下来就给自己做些小工具。",
      "平时写浏览器扩展、桌面应用，也在 Cloudflare 上搭些小网站。做东西时我最在意两件事：用着顺手，数据留在用户自己手里。",
      "我的应用不设账号，不收集使用数据。要同步，就走你自己的 Google Drive 或 WebDAV。"
    ],
    "hats": "我身上有好几顶帽子。做[[合规翻译官]]时，我把医疗器械法规讲成工程师听得懂的话，陪产品一步步走完注册；换成[[质量较真人]]，就写 SOP、做检查清单、盯着整改落地，审核来的时候我们早就准备好了。当[[项目牧羊人]]时，我拆需求、排进度，让研发、临床和生信朝同一个方向走。我也是个[[先画图的产品人]]：原型和数据库没想清楚，绝不先写代码。真要动手了，我就是[[全栈多面手]]，`C#`、`Python`、`Docker`、数据库都写，项目缺什么就补什么。面对测序数据，我又成了[[测序数据侦探]]，在 DNA-seq 数据里找突变，顺手让分析流程跑得更快。",
    "roles": [
      {
        "name": "合规翻译官"
      },
      {
        "name": "质量较真人"
      },
      {
        "name": "项目牧羊人"
      },
      {
        "name": "先画图的产品人"
      },
      {
        "name": "全栈多面手"
      },
      {
        "name": "测序数据侦探"
      }
    ],
    "github": "在 GitHub 上找我"
  },
  "invites": {
    "title": "推荐邀请",
    "lead": "我自己在用、觉得不错的服务。通过下面的链接注册，我们俩通常都能拿到一点奖励。",
    "empty": "还没有邀请链接。",
    "clicks": "{n} 次点击",
    "add": "添加",
    "edit": "编辑",
    "delete": "删除",
    "confirmDelete": "确定删除这条邀请吗？",
    "save": "保存",
    "cancel": "取消",
    "fieldTitle": "名称",
    "fieldUrl": "邀请链接",
    "fieldIntro": "简介（可选）",
    "login": "管理员登录",
    "logout": "退出登录",
    "signedIn": "已登录：{email}",
    "loginFailed": "登录没有成功，请再试一次。",
    "loginForbidden": "这个 Google 账号没有管理权限。",
    "loginUnconfigured": "登录还没配置好。",
    "loadFailed": "加载失败，请刷新重试。",
    "saveFailed": "保存失败："
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
