import type { DefaultTheme } from "vitepress";
import { zhcnNavbar } from "./navbar";
import { zhcnSidebar } from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  nav: zhcnNavbar,
  sidebar: zhcnSidebar,
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
        },
        modal: {
          displayDetails: "",
          resetButtonTitle: "重置",
          backButtonTitle: "返回",
          noResultsText: "无结果",
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
          },
        },
      },
    },
  },
  editLink: {
    pattern: "",
    text: "在 GitHub 上编辑此页",
  },
  lastUpdated: {
    text: "最后更新于",
  },
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  lightModeSwitchTitle: "切换到亮色模式",
  darkModeSwitchTitle: "切换到深色模式",
};

export default themeConfig;
