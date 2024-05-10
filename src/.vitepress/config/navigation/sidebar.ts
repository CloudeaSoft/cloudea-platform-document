import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
  {
    text: "User Manual",
    items: [
      { text: "Getting Started", link: "/docs/guide/getting-started" },
      { text: "Introduction", link: "/zh/docs/guide/introduction" },
    ],
  },
  {
    text: "Development Docs",
    items: [],
  },
  {
    text: "Protocol Docs",
    items: [],
  },
];

export default sidebar;
