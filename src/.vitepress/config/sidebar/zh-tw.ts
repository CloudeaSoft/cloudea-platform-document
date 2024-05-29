import type { DefaultTheme } from "vitepress";

export const zhtwSidebar: DefaultTheme.Sidebar = [
  { text: "簡介", link: "/zh-tw/docs/index", items: [] },
  {
    text: "用戶說明書",
    base: "/zh-tw/docs/guide/",
    items: [
      { text: "開始使用", link: "getting-started" },
      { text: "功能介紹", link: "features" },
    ],
  },
  {
    text: "開發文件",
    base: "/zh-tw/docs/development/",
    items: [
      { text: "總覽", link: "overview" },
      {
        text: "back-end",
        base: "/zh-tw/docs/development/back-end/",
        items: [{ text: "介紹", link: "index" }],
        collapsed: true,
      },
      {
        text: "front-end",
        base: "/zh-tw/docs/development/front-end/",
        items: [{ text: "介紹", link: "index" }],
        collapsed: true,
      },
    ],
    collapsed: true,
  },
  {
    text: "協議文件",
    items: [],
    collapsed: true,
  },
];
