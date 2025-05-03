import { defineConfig } from "vitepress";
import markDownItLivecodes from "markdown-it-livecodes";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    config: (md) => {
      md.use(markDownItLivecodes);
    },
  },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/live-codes/livecodes" },
    ],
  },
});
