# 專案介紹 (Onboarding)

Anne's 的個人技術部落格。

## 專案用途

用於紀錄作者在軟體開發過程中的學習筆記、實戰經驗與問題解決方案。

## 技術棧 (Technology Stack)

本專案是基於 VuePress 靜態網站生成器所搭建，並使用了以下主要技術：

- **核心框架**: [VuePress](https://vuepress.vuejs.org/) v1.x，一個以 Vue.js 為基礎的靜態網站生成器。
- **VuePress 主題**: [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)，一個簡潔美觀的部落格主題。
- **內容格式**: 使用 Markdown 格式撰寫文章，存放於 `_posts` 目錄下。
- **套件管理**: 使用 [Yarn](https://yarnpkg.com/) 進行相依性套件管理。
- **部署**: 設定透過 GitHub Actions 自動部署到 GitHub Pages。

## 本地開發

1.  **安裝相依套件**:
    在專案根目錄下執行指令，安裝 `package.json` 中定義的所有相依套件。

    ```bash
    yarn install
    ```

2.  **啟動開發伺服器**:
    執行以下指令，VuePress 會啟動一個包含熱重載（Hot-Reload）功能的本地開發伺服器。

    ```bash
    yarn serve
    ```

3.  **建置靜態檔案**:
    若要產生最終部署用的靜態 HTML/CSS/JS 檔案，請執行：
    ```bash
    yarn build
    ```
    建置完成的檔案會被輸出到 `.vuepress/dist` 目錄下。

---

## 功能：相關文章與繼續閱讀 (Feature: Related and Next Posts)

本專案有一個自訂的 Vue 元件 `RelatedAndNextPosts`，可以在文章結尾顯示「相關文章」列表與「繼續閱讀」的單一連結。

### 使用方法

要在某篇文章啟用此功能，只需完成兩個步驟：

1.  在該篇文章 `.md` 檔案的 `frontmatter` 區塊中，加入 `related` 或 `nextPost` 欄位。
2.  在文章內容的最末端，加上 `<RelatedAndNextPosts />` 標籤。

### Frontmatter 設定範例

```yaml
---
title: '我的文章標題'
date: 2026-01-01
tags:
  - tag
# --- 開始設定 ---
related:
  - /_posts/2025-04-16-git-note.md
  - /_posts/2024-01-04-git-worktree.md
nextPost:
  text: '下一篇要讀的文章標題'
  link: '/_posts/2025-07-15-TypeScript-TypeGuard-OptionalChaining.md'
# --- 結束設定 ---
---
這裡是您的文章正文...

...文章內容結束。

<RelatedAndNextPosts />
```

### 欄位說明

- `related` (選填):

  - **類型**: 陣列 (Array)
  - **內容**: 一個或多個相關文章的路徑字串。
  - **路徑格式**: 建議使用從根目錄開始的絕對路徑，並以 `.md` 結尾，例如 `/_posts/YYYY-MM-DD-some-post.md`。

- `nextPost` (選填):
  - **類型**: 物件 (Object)
  - **內容**:
    - `text`: 要顯示的連結文字。
    - `link`: 指向下一篇文章的路徑字串，格式同上。
