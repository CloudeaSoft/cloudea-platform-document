import type { DefaultTheme } from "vitepress";

export const enusSidebar: DefaultTheme.Sidebar = [
  { text: "Introduction", link: "/docs/index", items: [] },
  {
    text: "User Manual",
    items: [
      { text: "Getting Started", link: "/docs/guide/getting-started" },
      { text: "Introduction", link: "/docs/guide/features" },
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


