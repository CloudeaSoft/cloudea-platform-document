import type { DefaultTheme } from "vitepress";
import sidebar from "./navigation/sidebar";
import nav from "./navigation/navbar";

const themeConfig: DefaultTheme.Config = {
  // https://vitepress.dev/reference/default-theme-config
  nav,

  sidebar,

  logo: "/logo.svg",

  socialLinks: [
    { icon: "github", link: "https://github.com/CloudeaSoft/cloudea-platform" },
  ],

  search: {
    provider: "local",
  },
};

export default themeConfig;
