import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
  {
    text: "用户手册",
    items: [{ text: "新手上路", link: "/zh/docs/guide/getting-started" }],
  },
  {
    text: "开发文档",
    items: [],
  },
  {
    text: "协议文档",
    items: [],
  },
];

export default sidebar;
