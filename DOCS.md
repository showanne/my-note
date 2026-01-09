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
  - **路徑格式**: 請使用從專案根目錄開始的絕對路徑，並指向原始的 `.md` 檔案。例如：`/_posts/YYYY-MM-DD-some-post.md`。
    - **重要**: 您**不應該**在路徑中手動加入 ` /my-note/` 前綴。元件內部已使用 `<router-link>`，它會自動處理網站的 `base` 路徑，確保連結在任何部署環境下都正確。

- `nextPost` (選填):
  - **類型**: 物件 (Object)
  - **內容**:
    - `text`: 要顯示的連結文字。
    - `link`: 指向下一篇文章的路徑字串，格式同上。

---

## 內容樣式指南 (Content Style Guide)

### 1. 基本 Markdown 語法 (Basic Markdown Syntax)

這裡示範常用的 Markdown 語法：

#### 標題 (Headers)

# 這是一級標題 H1

## 這是二級標題 H2

### 這是三級標題 H3

#### 這是四級標題 H4

##### 這是五級標題 H5

###### 這是六級標題 H6

#### 段落與換行 (Paragraphs and Line Breaks)

這是第一段文字。

這是第二段文字，
中間有換行。

#### 文字強調 (Emphasis)

**粗體文字** 或 **粗體文字**
_斜體文字_ 或 _斜體文字_
**_粗斜體文字_**
~~刪除線文字~~

#### 清單 (Lists)

**無序清單 (Unordered List)**

- 項目一
- 項目二
  - 子項目一
  - 子項目二

**有序清單 (Ordered List)**

1. 第一項
2. 第二項
   1. 子項一
   2. 子項二

#### 連結 (Links)

[這是一個連結](https://www.example.com)
[這是一個帶有標題的連結](https://www.example.com '連結標題')

#### 圖片 (Images)

![圖片的替代文字](https://via.placeholder.com/150 '圖片標題')

#### 引用 (Blockquotes)

> 這是一段引言。
> 可以包含多行。
>
> > 也可以巢狀引用。

#### 程式碼 (Code)

**行內程式碼 (Inline Code)**

這是一段文字，其中包含 `行內程式碼`。

**程式碼區塊 (Code Block)**

```javascript
function hello() {
  console.log('Hello, World!');
}
```

#### 分隔線 (Horizontal Rule)

```markdown
---
---

---
```

#### 表格 (Tables)

| 表頭一 | 表頭二 | 表頭三 |
| ------ | ------ | ------ |
| 內容一 | 內容二 | 內容三 |
| 內容四 | 內容五 | 內容六 |

---

### 2. 資訊提示區塊 (Custom Containers)

您可以在文章中用來強調特定資訊，它們有不同的顏色和標題。

- **提示 (Tip):** 綠色，用於提供建議或有用的資訊。
- **注意 (Warning):** 黃色，用於提醒需要注意的事項。
- **危險 (Danger):** 紅色，用於強調重要警告或危險操作。

**語法範例:**

::: tip
這是一則提示。
:::

::: warning
這是一則需要注意的訊息。
:::

::: danger
這是一則危險警告。
:::

### 3. 程式碼區塊強化 (Code Blocks)

除了基本的程式碼上色，還支援：

- **行號顯示 (Line Numbers):** 在程式碼區塊旁顯示行號。
- **程式碼行高亮 (Line Highlighting):** 特別標示某幾行重要的程式碼。

**語法範例:**

````markdown
```js{4}
// 第 4 行會被高亮
export default {
  name: 'MyComponent',
  data() {
    return { message: 'Hello VuePress!' }
  }
}
```
````
