import type { DefaultTheme } from "vitepress";
import { zhtwNavbar } from "./navbar";
import { zhtwSidebar } from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  nav: zhtwNavbar,
  sidebar: zhtwSidebar,
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
};

export default themeConfig;
