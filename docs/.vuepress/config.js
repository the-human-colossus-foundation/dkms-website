const { defaultTheme } = require('vuepress');
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'en-US',
  title: 'Decentralised Key Management System',
  plugins: [
    searchPlugin({
      // options
    }),
  ],
  theme: defaultTheme({
    logo: '/logo.png',
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  })
}
