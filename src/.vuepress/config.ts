import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/", // 默认为 '/' 现在修改为 '/hope/'以适应GitHub Paes页面访问路径

  head: [
    [
      'link', { rel: 'icon', href: 'assets/images/logo.jpg' }
    ]
  ],

  lang: "zh-CN",
  title: "小李の学习笔记 It's all done! ",
  description: "✨热爱可抵岁月漫长✨",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
