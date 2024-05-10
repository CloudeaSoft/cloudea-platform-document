import {
  LocaleConfig,
  LocaleSpecificConfig,
  Theme,
  defineConfig,
} from "vitepress";
import themeConfig from "./themeConfig";
import zhThemeConfig from "./zh/themeConfig";

export default defineConfig({
  title: "Cloudea Platform",
  description: "Document For Cloudea Platform",
  themeConfig,
  lastUpdated: true,
  appearance: {},
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      title: "Cloudea Platform",
      description: "Cloudea Platform 文档",
      themeConfig: zhThemeConfig,
    },
  },
});
