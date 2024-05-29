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
          buttonText: "搜尋文件",
        },
        modal: {
          displayDetails: "",
          resetButtonTitle: "重置",
          backButtonTitle: "回退",
          noResultsText: "無結果",
          footer: {
            selectText: "選擇",
            navigateText: "轉換",
            closeText: "關閉",
          },
        },
      },
    },
  },
  editLink: {
    pattern: "",
    text: "在 GitHub 上編輯此頁",
  },
  lastUpdated: {
    text: "最後更新於",
  },
  docFooter: {
    prev: "上一頁",
    next: "下一頁",
  },
  lightModeSwitchTitle: "切換到亮色主題",
  darkModeSwitchTitle: "切換到深色主題",
};

export default themeConfig;
