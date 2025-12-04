# 对象

你可以用以下语法声明对象字面量：

```js
const obj = {
  name: "YKDZ",
  age: 18,
  preference: "Minecraft",
  address: {
    country: "China",
    province: "XXX",
    city: "XXX",
  },
  greet: () => console.log("Hello World!"),
}
```

用此语法声明的对象，其原型默认为根原型对象，详见 [面向对象](../oop)。
