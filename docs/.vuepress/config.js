const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  lang: "en-US",
  title: "Decentralised Key Management System",
  plugins: [
    searchPlugin({
      // options
    }),
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    // default theme config
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
