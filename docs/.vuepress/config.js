const { defaultTheme } = require('vuepress');
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'en-US',
  title: 'Decentralised Key Management System',
  plugins: [
    searchPlugin({
      // options
    })
  ],
  theme: defaultTheme({
    logo: '/logo.png',
    // default theme config
    sidebar: {
      '/introduction': [
        {
          text: 'Introduction',
          children: [
            '/introduction.md',
            '/introduction/glossary.md',
            '/introduction/concepts.md',
          ],
        },
        {
          text: 'Usage',
          children: [
            '/usage/infrastructure.md',
            '/usage/client.md'
          ],
        }
      ],
      '/usage': [
        {
          text: 'Usage',
          children: [
            '/usage/infrastructure.md',
            '/usage/client.md'
          ],
        }
      ]
    },
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  })
}
