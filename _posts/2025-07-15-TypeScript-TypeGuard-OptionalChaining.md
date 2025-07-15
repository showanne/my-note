---
title: TypeScript 筆記：Type Guard 與 Optional Chaining
date: 2025-07-15
category: TypeScript
tags:
  - TypeScript
  - FE
---

# 📘 TypeScript 筆記：Type Guard 與 Optional Chaining

## 📌 目錄

1. [Type Guard 是什麼？](#type-guard-是什麼)
2. [常見 Type Guard 用法](#常見-type-guard-用法)
3. [Optional Chaining 是什麼？](#optional-chaining-是什麼)
4. [Optional Chaining 實用範例](#optional-chaining-實用範例)
5. [結語與應用建議](#結語與應用建議)

---

## 🔹 Type Guard 是什麼？

**Type Guard**（型別守衛）是在執行期間用來判斷變數實際型別的技術，讓 TypeScript 能正確推斷型別，避免錯誤發生。

📌 常用於處理：

- 聯合型別（union types）
- 需要類型分支的函式
- 自定義類型判斷

---

## 🔸 常見 Type Guard 用法

### 1. `typeof` 判斷基本型別

```ts
function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}
```

---

### 2. `instanceof` 判斷類別物件

```ts
class Cat {
  meow() {}
}
class Dog {
  bark() {}
}

function handlePet(pet: Cat | Dog) {
  if (pet instanceof Cat) {
    pet.meow()
  } else {
    pet.bark()
  }
}
```

---

### 3. 自定義 Type Guard 函式

```ts
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim()
  } else {
    animal.fly()
  }
}
```

---

## 🔹 Optional Chaining 是什麼？

**Optional Chaining (`?.`)** 是 JavaScript 的語法（ES2020），用來 **安全存取巢狀物件的屬性或函式**，若中間層級為 `undefined` 或 `null`，不會報錯，直接回傳 `undefined`。

---

## 🔸 Optional Chaining 實用範例

### 📦 巢狀屬性存取

```ts
const user = {
  profile: {
    email: 'test@example.com'
  }
}

console.log(user.profile?.email) // ✔ "test@example.com"
console.log(user.settings?.theme) // ✔ undefined，不報錯
```

---

### 🧩 Optional Function Call

```ts
const logger = {
  log: () => console.log('Log called')
}

logger.log?.() // ✔ 呼叫成功
logger.debug?.() // ✔ undefined，不拋錯
```

---

### 🔄 搭配 Nullish 合併（??）

```ts
const config = {
  theme: null
}

const theme = config.theme ?? 'default'
console.log(theme) // ➜ "default"
```

---

## ✅ 結語與應用建議

| 工具                | 說明             | 適合用在                                 |
| ------------------- | ---------------- | ---------------------------------------- |
| `Type Guard`        | 判斷與過濾型別   | 函式處理、聯合型別、安全轉型             |
| `Optional Chaining` | 安全讀取深層屬性 | API 回傳物件、巢狀資料、不確定資料存在性 |
