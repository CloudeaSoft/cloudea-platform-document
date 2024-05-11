import {
  LocaleConfig,
  LocaleSpecificConfig,
  Theme,
  defineConfig,
} from "vitepress";
import themeConfig from "./theme";
import themeConfigZH from "./theme-zh-cn";

export default defineConfig({
  title: "Cloudea Platform",
  description: "Document For Cloudea Platform",
  themeConfig,
  lastUpdated: true,
  appearance: {},
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-cn/",
      title: "Cloudea Platform",
      description: "Cloudea Platform 文档",
      themeConfig: themeConfigZH,
    },
  },
});
