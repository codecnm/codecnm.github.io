import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "个人主页",
    icon: "/assets/icon/home.svg",
    link: "/",
  },
  "/demo/",
  {
    text: "后端",
    icon: "/assets/icon/real-end.svg",
    prefix: "/article/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        children: [
          { text: "JavaSE", icon: "/assets/icon/javase.svg", link: "JavaSE/" },
          { text: "JavaWeb", icon: "/assets/icon/javaweb.svg", link: "JavaWeb/" },
        ],
      },
      {
        text: "数据库",
        icon: "pen-to-square",
        prefix: "/real_end/",
        children: [
          { text: "MySQL", icon: "/assets/icon/mysql.svg", link: "MySQL/" },
          { text: "Redis", icon: "/assets/icon/redis.svg", link: "Redis/" },
        ],
      },
      {
        text: "框架",
        icon: "pen-to-square",
        prefix: "/real_end/",
        children: [
          { text: "Spring", icon: "/assets/icon/spring.svg", link: "Spring/" },
          { text: "SpringMVC", icon: "/assets/icon/springmvc.svg", link: "SpringMVC/" },
          { text: "MyBatis", icon: "/assets/icon/mybatis.svg", link: "MyBatis/" },
          { text: "MyBatisPlus", icon: "/assets/icon/mybatisplus.svg", link: "MyBatisPlus/" },
        ],
      },
    ],
  },

  // {
  //   text: "前端",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "基础",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "HTML", icon: "pen-to-square", link: "1" },
  //         { text: "CSS", icon: "pen-to-square", link: "2" },
  //         { text: "JavaScript", icon: "pen-to-square", link: "2" },
  //       ],
  //     },
  //     {
  //       text: "框架",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         { text: "Vue.js", icon: "pen-to-square", link: "1", },
  //         { text: "React", icon: "pen-to-square", link: "1", },
  //       ],
  //     },
  //   ],
  // },

  {
    text: "常用网站",
    icon: "/assets/icon/website.svg",
    link: "/article/common_websites.md"
  },

  {
    text: "工具箱",
    icon: "/assets/icon/tools.svg",
    prefix: "/toolbox/",
    children: [
      {
        text: "开发",
        icon: "/assets/icon/coder.svg",
        link: "develop/develop",
      },
      {
        text: "其他",
        icon: "/assets/icon/other.svg",
        link: "other/other",
      },
    ],
  },

  {
    text: "时间轴",
    icon: "/assets/icon/timeline.svg",
    link: "/timeline/",
  },


  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
