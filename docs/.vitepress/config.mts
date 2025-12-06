import { defineConfig, type DefaultTheme, type UserConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import type { VitePressSidebarOptions } from "vitepress-sidebar/types";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  title: "HyphaDocs",

  description: "Official Document for Hypha series Minecraft Paper plugin",

  cleanUrls: true,

  base: process.env.CI ? "/HyphaDocs/" : "/",

  vite: {
    plugins: [tailwindcss()],
  },

  rewrites: {
    "zh/:rest*": ":rest*",
  },

  lastUpdated: true,

  head: [["link", { rel: "icon", href: "/assets/favicon.svg" }]],

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",

      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "HyphaScript", link: "/hyphascript" },
          { text: "HyphaShop", link: "/hyphashop" },
        ],
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
        outline: {
          label: "大纲",
        },
        lastUpdated: {
          text: "最后更新",
        },
        langMenuLabel: "切换语言",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "外观",
        lightModeSwitchTitle: "切换到浅色主题",
        darkModeSwitchTitle: "切换到深色主题",
      },
    },
    en: {
      label: "English",
      lang: "en",

      themeConfig: {
        nav: [
          { text: "首页", link: "/en" },
          { text: "HyphaScript", link: "/en/hyphascript" },
          { text: "HyphaShop", link: "/en/hyphashop" },
        ],
      },
    },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/YKDZ/HyphaDocs" },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "重置搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "输入",
                  navigateText: "导航",
                  navigateUpKeyAriaLabel: "上箭头",
                  navigateDownKeyAriaLabel: "下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
  },
} satisfies UserConfig<NoInfer<DefaultTheme.Config>>;

const vitePressSidebarOptions = {
  documentRootPath: "/docs",
  collapsed: false,
  useTitleFromFileHeading: true,
  useFolderLinkFromIndexFile: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  capitalizeFirst: false,
  frontmatterOrderDefaultValue: 1024,
} satisfies VitePressSidebarOptions;

const rootLocale = "zh";
const supportedLocales = [rootLocale, "en"];

const vitePressSidebarConfigs = supportedLocales
  .map((lang) => {
    const rootPath = resolve(__dirname, "..", lang);
    if (!existsSync(rootPath)) return null;

    return {
      ...vitePressSidebarOptions,
      ...(rootLocale === lang ? {} : { basePath: `/${lang}/` }),
      documentRootPath: `/docs/${lang}`,
      resolvePath: rootLocale === lang ? "/" : `/${lang}/`,
    };
  })
  .filter((conf) => conf !== null);

export default defineConfig(withSidebar(config, vitePressSidebarConfigs));
