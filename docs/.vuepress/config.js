import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

export default {
  lang: "en-US",
  title: "Decentralised Key Management System",

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    searchPlugin({
      // options (add if needed)
    }),
  ],

  theme: defaultTheme({
    logo: "/logo.png",
    sidebar: {
      "/introduction": [
        {
          text: "Introduction",
          children: [
            "/introduction/why.md",
            "/introduction.md",
            "/introduction/architecture.md",
            "/introduction/glossary.md",
            "/introduction/concepts.md",
          ],
        },
      ],
      "/developer-guide": [
        {
          text: "Developer Guide",
          children: [
            "/developer-guide/infrastructure.md",
            "/developer-guide/client.md",
          ],
        },
      ],
    },
    navbar: [
      {
        text: "DKMS Concepts",
        link: "/introduction/why",
      },
      {
        text: "Developer Guide",
        link: "/developer-guide/infrastructure",
      },
    ],
  }),
};
