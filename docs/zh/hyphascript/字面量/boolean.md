# 布尔值

HyphaScript 预定义了 `true` 和 `false` 字面量。

以下是常见的用法：

```js
const flag = false

if (flag) {
  console.log("yes")
}
```

## 真假值

HS 有 [类似 JS](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) 的真假值机制，以下值都会被视为 `false`：

- false
- null
- 空字符串
- 0
- -0

所有未在以上列表中的值都会被视为 `true`。
