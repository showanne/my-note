---
title: 在 Windows 使用 Git 版控時可以區分檔案名稱大小寫
date: 2023-08-13
tags:
  - Git
  - 神奇問題
---

### 遇到的問題：

我更新了圖片的名稱 CiRCLELiNKs 改 CiRCLELiNKS ，但是在 git 當中卻沒有被記錄

原本的圖的路徑：
https://web.net/img/social-logo-CiRCLELiNKs.png

應該要變成新的圖的路徑：
https://web.net/img/social-logo-CiRCLELiNKS.png

但不知為何沒有效果？

### 解決方法是：

由於在 windows 的世界中，大小寫的檔名編碼是一樣的，因此必須告訴 git 他們不一樣。

使用指令讓 windows 系統的 git 可以偵測到檔案名稱的變更

```bash
git config --local core.ignorecase false
```

並使用指令將舊檔刪除

```bash
git rm public\img\social-logo-CiRCLELiNKs.png
```

如此就會有檔案更新的紀錄了

### 參考文章：

[如何在 Windows 使用 Git 版控時可以區分檔案名稱大小寫](https://blog.miniasp.com/post/2021/12/28/git-config-core-ignorecase-false-in-Windows)
