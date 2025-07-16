---
title: 多層摺疊 collapse 效果被觸發在更多按鈕上
date: 2021-12-16
tags:
  - Bootstrap
  - JavaScript
  - jQuery
  - 神奇問題
---

# 多層摺疊 collapse 效果被觸發在更多按鈕上

## 原因

使用程式控制摺疊時機時，未指定目標點擊時才觸發相關程式，造成該 id 內有 collapse 的設定會一起觸發相關程式，點擊第二層的 `#collapse2-1` ，也會將第一層一起摺疊。

### html 結構

```html
<button
  class="primary-btn collapse1-btn collapsed"
  type="button"
  data-toggle="collapse"
  data-target="#collapse1"
>
  collapse1
</button>

<!-- 第一層 collapse -->
<div class="collapse" id="collapse1">
  <div class="search-box">
    <form action="">
      <!-- 第二層 collapse -->
      <a data-toggle="collapse" href="#collapse2-1">
        <p>collapse2-1</p>
      </a>
      <div class="collapse show" id="collapse2-1">collapse2-1 content</div>
      <a data-toggle="collapse" href="#collapse2-2">
        <p>collapse2-2</p>
      </a>
      <div class="collapse show" id="collapse2-2">collapse2-2 content</div>
      <a data-toggle="collapse" href="#collapse2-3">
        <p>collapse2-3</p>
      </a>
      <div class="collapse show" id="collapse2-3">collapse2-3 content</div>
    </form>
  </div>
</div>
```

### script 程式

```javascript
$('#search-box').on('show.bs.collapse', function () {
  // do something ...
})
```

## 解決

將觸發對象指定為點擊的那個目標

```javascript
$('#collapse').on('show.bs.collapse', function (e) {
  if ($(this).is(e.target)) {
    // do something ...
  }
})
```

參考：[javascript - jQuery show.bs.collapse event for nested Bootstrap collapsible buttons fires on more buttons than expected - Stack Overflow](https://stackoverflow.com/questions/32070392/jquery-show-bs-collapse-event-for-nested-bootstrap-collapsible-buttons-fires-on)
