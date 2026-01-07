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
