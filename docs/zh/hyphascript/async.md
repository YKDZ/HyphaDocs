# 异步处理

Future 在 HS 中作为内部对象默认被暴露在根上下文中，无需导入即可使用。

它是对 Java CompletableFuture API 的包装，用于为脚本提供异步回调的能力。

一个例子如下：

```js
Future.supply(() => {
  console.log(1)
  sleep 6000
  return 2
})
.then((result) => {
  console.log(result)
  return result + 1
})
.then((result) => {
  console.log(result)
  return result + 1
})
.then((result) => {
  console.log(result)
  return result + 1
})
```

以上代码的输出为：

```js
1
// 经过约六秒后
2
3
4
```

:::info
在内部，`then`​ 和 `supply`​ 的返回值都是 Future 对象的实例，该对象有一个名为 `future`​ 的成员，其值为用于向下传递的 `CompletableFuture<Reference>` 对象。
:::

‍
