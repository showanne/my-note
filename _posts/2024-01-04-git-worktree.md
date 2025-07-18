---
title: 使用 `git worktree` 在同一個 repo 同時開啟不同分支的進度做開發
date: 2024-01-04
tags:
  - Git
---

### 參考文章：

[使用 git worktree 管理一個本地儲存庫下的多個工作目錄副本](https://blog.miniasp.com/post/2023/10/29/git-worktree-manage-multiple-working-directories)

---

## 情境一：同時開發複數分支

### 情境：當一個 repo 有多個分支時，目前正在開發 a 分支，臨時接到需求要微調 b 分支

### 作法：此時可以使用 `git worktree` 切換到 b 分支做調整。

![git worktree 操作紀錄](https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_42988e355c38b3cd71ae5cd1db50ee72.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1752825441&Signature=ErCWzJ9X3NoQZvMAiqDHoaVJOS4%3D)
![git worktree 操作紀錄-2](https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_3db01e58f52613a073a376793045d106.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1752825493&Signature=%2F7F6yilr3%2Fp3zXBzuH1N3ct1zhE%3D)

1. 先使用 `git worktree list` 確認目前使用的分支狀態「工作目錄」，正常狀態應該只會列出一個分支
2. 再使用 `git worktree add` 建立第二個工作目錄

   ```bash
   git worktree add [資料夾] [分支]
   ```

---

### 情境：新增一個 worktree（例如 checkout `feature-abc` 到 `./worktrees/feature-abc` 資料夾）

### 作法：此時可以使用 `git worktree` 切換到新分支做調整，如果 `feature-abc` 還不存在，可以加 `-b`。

```bash
git worktree add -b feature-abc ./worktrees/feature-abc origin/main
```

---

## 情境二：移動工作目錄的路徑

### 作法：可以使用 `git worktree move` 移動該工作目錄的資料夾。

```bash
git worktree move [目前資料夾] [目標資料夾]
```

---

## 情境三：刪除工作目錄的路徑

### 作法：可以使用 `git worktree remove` 移動該工作目錄的資料夾。

```bash
git worktree remove [目前資料夾]
```
