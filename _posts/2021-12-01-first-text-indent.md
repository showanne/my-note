---
title: 首行凸排效果
date: 2021-12-01
tags:
  - CSS
  - 神奇問題
---

# 首行凸排效果

### 方法１：自身`text-indent: -1em;`

text-indent 的作用是設定文字首行縮排，其中設定的值主要是以數值為主，若要設定首行凸排就將數值設為負值。
可使用的單位：px、em(字元)、ex、vw、vh、cm、in、%。
注意：若設定凸排要 padding-left 回來。

範例：
![](https://i.imgur.com/nLeAgvQ.png)

> 範例中的 `text-indent: -25px;` = icon**16** + iconMargin**5** + spanPadding**4**
> 範例中的 `.info {padding-left: 32px;}` = 原本的對齊**7** + text-indent**25**
> 參考：[Text-indent - 金魚都能懂的 CSS 必學屬性](https://ithelp.ithome.com.tw/articles/10243388)

### 方法２：上層容器`display: flex;`

範例：
![](https://i.imgur.com/BYvvb2Z.png)
