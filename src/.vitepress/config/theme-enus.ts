import type { DefaultTheme } from "vitepress";
import { enusNavbar } from "./navbar";
import { enusSidebar } from "./sidebar";

const themeConfig: DefaultTheme.Config = {
  nav: enusNavbar,
  sidebar: enusSidebar,
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
