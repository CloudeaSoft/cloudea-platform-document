import { defineConfig } from "vitepress";
import themeConfigENUS from "./theme-enus";
import themeConfigZHCN from "./theme-zhcn";
import themeConfigZHTW from "./theme-zhtw";

export default defineConfig({
  lastUpdated: true,
  appearance: {},
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
      title: "Cloudea Platform",
      description: "Document For Cloudea Platform",
      themeConfig: themeConfigENUS,
    },
    "zh-cn": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-cn/",
      title: "Cloudea Platform",
      description: "Cloudea Platform 文档",
      themeConfig: themeConfigZHCN,
    },
    "zh-tw":{
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zh-tw/",
      title: "Cloudea Platform",
      description: "Cloudea Platform 文檔",
      themeConfig: themeConfigZHTW,
    }
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CloudeaSoft/cloudea-platform",
      },
    ],
    search: {
      provider: "local",
    },
  },
});
