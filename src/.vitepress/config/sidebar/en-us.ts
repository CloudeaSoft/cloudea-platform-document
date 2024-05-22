import type { DefaultTheme } from "vitepress";

export const enusSidebar: DefaultTheme.Sidebar = {
  "/docs/": [
    { text: "Introduction", link: "/docs/index", items: [] },
    {
      text: "User Manual",
      items: [
        { text: "Getting Started", link: "/docs/guide/getting-started" },
        { text: "Features", link: "/docs/guide/features" },
      ],
    },
    {
      text: "Development Docs",
      items: [
        {
          text: "Overview",
          link: "/docs/development/overview",
        },
        {
          text: "back-end",
          items: [{ text: "Introduction", link: "/docs/development/back-end/introduction" }],
          collapsed: true,
        },
        {
          text: "front-end",
          items: [{ text: "Introduction", link: "/docs/development/front-end/introduction" }],
          collapsed: true,
        },
      ],
    },
    {
      text: "Protocol Docs",
      items: [],
    },
  ],
  "/blogs/": [{ text: "Introduction", link: "/blogs/", items: [] }],
};
