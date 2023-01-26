import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/deepcodebase/",

  locales: {
    "/": {
      lang: "en-US",
      title: "DeepCodebase",
      description: "A template for deep learning projects.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "DeepCodebase",
      description: "深度学习项目模板。",
    },
  },

  theme,

  shouldPrefetch: false,
});
