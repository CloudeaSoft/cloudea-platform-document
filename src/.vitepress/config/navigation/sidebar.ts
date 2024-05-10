import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
  { text: "Introduction", link: "/docs/index", items: [] },
  {
    text: "User Manual",
    items: [
      { text: "Getting Started", link: "/docs/guide/getting-started" },
      { text: "Introduction", link: "/docs/guide/introduction" },
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
