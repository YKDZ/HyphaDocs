import { defineConfig } from "vitepress";

export default defineConfig({
  title: "HyphaDocs",
  description: "Official Document for Hypha series Minecraft Paper plugin",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "HyphaScript", link: "/hyphascript" },
    ],

    sidebar: [
      {
        text: "HyphaScript",
        items: [
          { text: "介绍", link: "/hyphascript/index" },
          { text: "类型", link: "/hyphascript/type" },
          { text: "运算符", link: "/hyphascript/operator" },
          {
            text: "字面量",
            collapsed: true,
            items: [
              { text: "字符串", link: "/hyphascript/literal/string" },
              { text: "数字", link: "/hyphascript/literal/number" },
              { text: "布尔值", link: "/hyphascript/literal/boolean" },
              { text: "数组", link: "/hyphascript/literal/array" },
              { text: "对象", link: "/hyphascript/literal/object" },
              { text: "空", link: "/hyphascript/literal/null" },
              {
                text: "模板字符串",
                link: "/hyphascript/literal/template-string",
              },
            ],
          },
          { text: "函数", link: "/hyphascript/function" },
          { text: "导入", link: "/hyphascript/import" },
          { text: "面向对象", link: "/hyphascript/oop" },
          { text: "异步处理", link: "/hyphascript/async" },
          { text: "API", link: "/hyphascript/api" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/YKDZ/HyphaDocs" },
    ],
  },
});
