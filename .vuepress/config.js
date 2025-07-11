module.exports = {
  lang: 'zh-TW',
  title: "Anne's Notes",
  description: "Anne's Notes Website",
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/showanne/showanne.github.io/master/src/Anne.jpg'
      }
    ]
  ],
  base: '/',

  themeConfig: {
    // Logo
    logo: './face.png',

    // 頂部導覽列
    nav: [
      { text: '首頁', link: '/' },
      { text: 'JavaScript', link: '/javascript/', target: '_self' },
      { text: 'Vue.js', link: '/vue/' }
    ]
  }
}
