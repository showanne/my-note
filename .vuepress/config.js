module.exports = {
  lang: 'zh-TW',
  title: "Anne's Notes",
  description: "Anne's Notes Website",
  theme: 'reco',

  // 部落格類型
  type: 'blog',

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
    author: 'Anne',
    authorAvatar: './face.png',

    // Repository 連結
    repo: 'showanne/my-note',
    repoLabel: '本頁原始碼',
    // 假如文件檔的 Repository 跟上面設定的 repo 是不一樣的路徑：
    // docsRepo: 'showanne/my-note',
    // 假如文檔不是在 Repository 的根目錄下
    // docsDir: 'docs',
    // 假如文檔在其他的分支下
    docsBranch: 'main',
    // 預設是 false，改為 true 就可以開啟這連結
    editLinks: true,
    // 連結顯示的文字，預設為「Edit this page」
    editLinkText: '修改此頁面',

    // 選單設定
    nav: [
      { text: '首頁', link: '/' },
      { text: '文章', link: '/timeline/' },
      { text: '標籤', link: '/tag/' },
      { text: '分類', link: '/categories/' },
      { text: 'GitHub', link: 'https://github.com/showanne' }
    ],

    // Footer 設定
    footer: {
      createYear: 2025,
      copyright:
        'Anne | <a href="mailto:showanne.e@gmail.com" target="_blank">Contact</a>'
    },

    blogConfig: {
      category: {
        location: 2,
        text: '分類'
      },
      tag: {
        location: 3,
        text: '標籤'
      }
    },

    sidebarDepth: 2, // 顯示 h2、h3 標題為 TOC

    // Sitemap
    sitemap: {
      hostname: 'https://showanne.github.io/'
    },

    // 最後更新時間 - git 提交的 UNIX 時間戳(ms)
    lastUpdated: '最後更新', // string | boolean

    // 頁面滾動效果
    smoothScroll: true
  },

  plugins: [
    //   [
    //     '@vuepress/google-analytics',
    //     { 'ga': 'UA-74398300-1' }
    //   ]
  ]
}
