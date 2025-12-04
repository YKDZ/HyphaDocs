# 数字

以下是一些合法的数字字面量：

```js
6
1.1
// 用 _ 来分隔长数字，没有特殊意义，这个数字与 100000000 完全相同
100_000_000
5.0
```

在调用 Java 方法时，数字实参的类型将会被自动转换（使用 `BigDecimal` 类的 `intValue`、`doubleValue` 等方法）以适应类型为 `Number` 的子类的形参（如 `Long`、`Double` 和 `Byte` 等）。一个简单的例子如下：

```js
import "java.util.Random" from "java"

const random = new Random()
const bound = 5

// 将输出一个在 [0,5) 之间的随机 double
console.log(random.nextDouble(bound))
// 将输出一个在 [0,5) 之间的随机 int
console.log(random.nextInt(bound))
```

:::info
这是弱类型脚本为了兼容性的无奈之举，可能会导致未定义的精度丢失。
:::
