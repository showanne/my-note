---
title: git 時光機倒回過去或指定版本
date: 2024-01-12
tags:
  - Git
---

### 取消此次 commit ，並保留檔案變更

```bash
  git reset HEAD~1
```

PS. 如果想要回復成上 2 個，就做 2 次此指令

### 查看所有操作紀錄

```bash
  git reflog
```

PS. 紀錄包含 pull、commit、reset ...的所有操作紀錄
![image](https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_7bb6859ee2d0209e640f8ef1e44bb5a8.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1752825938&Signature=bYVFEI%2BQ3x8768rupAbDYRrDxp8%3D)

### 復原到指定版本

```bash
  git reset --hard {commit id}
```

![image](https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_57f602b8a52589ad769a726a4c77dc05.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1752826007&Signature=asjOf6SDo52s%2Fi%2FwekIvHW6xpzU%3D)

### 修改指定 commit 的訊息，而不影響 commit 內容紀錄

EX：要修改倒數第 3 個 commit 的訊息

```bash
  git rebase -i HEAD~3
```
