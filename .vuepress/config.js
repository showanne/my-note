module.exports = {
  lang: 'zh-TW',
  title: "Anne's Notes",
  description: "Anne's Notes Website",
  base: '/my-note/',
  theme: 'reco',

  // 部落格類型
  type: 'blog',

  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/showanne/showanne.github.io/master/favicon.ico'
      }
    ],
    // 優化手機板搜尋框放大後會失去焦點而可以左右滑動的效果
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    ['meta', { name: 'theme-color', content: '#551a8b' }]
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  themeConfig: {
    // Logo
    logo: '/face.png',
    author: 'Anne',
    authorAvatar: '/face.png',

    // Repository 連結
    repo: 'showanne/my-note',
    repoLabel: 'Source',
    // 假如文件檔的 Repository 跟上面設定的 repo 是不一樣的路徑：
    // docsRepo: 'showanne/my-note',
    // 假如文檔不是在 Repository 的根目錄下
    // docsDir: 'docs',
    // 假如文檔在其他的分支下
    docsBranch: 'main',
    // 預設是 false，改為 true 就可以開啟這連結
    editLinks: false,
    // 連結顯示的文字，預設為「Edit this page」
    // editLinkText: '修改此頁面',

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

    // 關閉 404 頁面 (腾讯公益)
    noFoundPageByTencent: false,

    // 默認主題模式 - true 為顯示切換按鈕，false 為不顯示
    modePicker: false,

    // 程式碼區塊的主題樣式
    codeTheme: 'okaidia', // default 'tomorrow'

    subSidebar: 'auto',

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
