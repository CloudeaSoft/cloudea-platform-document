import type { DefaultTheme } from "vitepress";

export const zhtwSidebar: DefaultTheme.Sidebar = [
  { text: "介绍", link: "/zh-tw/docs/index", items: [] },
  {
    text: "用户手册",
    base: "/zh-tw/docs/guide/",
    items: [
      { text: "新手上路", link: "getting-started" },
      { text: "功能介绍", link: "introduction" },
    ],
  },
  {
    text: "开发文档",
    base: "/zh-tw/docs/development/",
    items: [
      { text: "总览", link: "overview" },
      {
        text: "后端项目",
        base: "/zh-tw/docs/development/back-end/",
        items: [{ text: "总览", link: "index" }],
        collapsed: true,
      },
      {
        text: "前端项目",
        base: "/zh-tw/docs/development/front-end/",
        items: [{ text: "总览", link: "index" }],
        collapsed: true,
      },
    ],
    collapsed: true,
  },
  {
    text: "协议文档",
    items: [],
    collapsed: true,
  },
];
