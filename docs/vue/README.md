# Vue.js 筆記

## Vue 3 基礎

### 建立 Vue 應用

```javascript
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})
```
