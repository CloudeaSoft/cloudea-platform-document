import type { DefaultTheme } from "vitepress";
import sidebar from "./navigation/sidebar";
import nav from "./navigation/navbar";

const themeConfig: DefaultTheme.Config = {
  nav,
  sidebar,
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
};

export default themeConfig;
