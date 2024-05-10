import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from './Layout.vue'
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
