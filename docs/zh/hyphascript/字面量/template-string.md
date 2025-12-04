# 模板字符串

用 ` `` ` 或 ` ?`` ` 包裹的内容被视为模板字符串，其与普通字符串相比多出以下机制：

- 将 `${}` 包裹的内容（后文称为**变量**）视为一个表达式进行解析
- 若以`?` 开头（即首个 `` ` `` 符号后的上一个符号为 `?`），则若后文的任何一个变量出现 `null` 值，整个模板字符串字面量的值就会变为 `null`

以下是一些合法的模板字符串：

```js
`Hello World!`
`1 + 1 = ${1 + 1}`
`Welcome ${PlaceholderAPI.papi("%player_name%")}`
?`<dark_gray>- <gray>Global Stock: <white>${global_stock}`
```
