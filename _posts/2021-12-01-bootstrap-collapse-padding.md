---
title: 摺疊效果 collapse 被 padding 影響造成二段收合動畫
date: 2021-12-01
tags:
  - Bootstrap
  - CSS
  - 神奇問題
---

# 摺疊效果 collapse 被 padding 影響造成二段收合動畫

## 問題紀錄

#### 正常速度

![](https://i.imgur.com/HAL1iP3.gif)

#### 慢速版

![](https://i.imgur.com/mNOMRxK.gif)

## 解決問題紀錄

#### 推測

應該是因為 `.task-item-content` 有 padding，摺起來時 bootstrap 預設會將 `height: 0; transition: height .5s ease;`，我沒有針對我另外設定的屬性作處理。
另外因為 bootstrap 是包兩層結構，我將折疊容器簡化為一層，所以需要額外對我設的其他屬性作設定。

#### 解決

需要再設定讓間距也要消失，就不會就沒內容還有間距卡著的狀況。

```css
.task-item-content {
  padding: 0.5rem;
  transition: all 0.5s ease-in-out;
  transition-property: height, padding;
}
.task-item-content.collapsing {
  height: 0;
  padding: 0 0.5rem;
}
```

![](https://i.imgur.com/sFdW6mv.gif)
