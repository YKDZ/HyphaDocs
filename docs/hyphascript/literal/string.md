# 字符串

用 `""` 或 `''` 包裹的内容被视为字符串常量。

以下是一些合法的字符串：

```js
"Hello World!"
"\"HyphaScript\" is a script language created by YKDZ"
'YKDZ'
```

:::info
HS 没有字符类型，若调用 Java 方法时参数期待一个字符，则会自动取字符串值的第一个字符传入
:::

## 切片

字符串也可以作为字符数组被切片语法访问，例如：

```js
const str = "LKDZ Miao~"
str[-5:-1] == "Miao"
str[0:4] =="LKDZ"
str[5:100] == "Miao~"
str[::2] == "LD io"
```
