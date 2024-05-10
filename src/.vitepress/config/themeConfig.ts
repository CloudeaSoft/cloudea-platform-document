import type { DefaultTheme } from "vitepress";
import sidebar from "./navigation/sidebar";
import nav from "./navigation/navbar";

const themeConfig: DefaultTheme.Config = {
  nav,
  sidebar,
  socialLinks: [
    { icon: "github", link: "https://github.com/CloudeaSoft/cloudea-platform" },
  ],
  search: {
    provider: "local",
  },
  editLink: {
    pattern: "",
    text: "Edit this page on GitHub",
  },
  lastUpdated: {
    text: "Last updated at",
  },
  docFooter: {
    prev: "Prev",
    next: "Next",
  },
};

export default themeConfig;
