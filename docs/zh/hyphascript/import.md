# 导入

`import` 开头的语句被视为导入。

以下内容可以被导入语句导入到当前脚本中。

## Java 类

`from` 以 `java:` 或 `java.` 开头的导入被视为一个 Java 类导入（其中 `java:` 前缀会被从类路径忽略）：

```js
import Random from "java.util.Random"
import Random as Rand from "java.util.Random"
import Rand from "java:java.util.Random"
import Random from "java:java.util.Random"
```

之后你可以像原生 Java 代码一样调用其中的静态方法或 `new` 一个实例等：

```js
import Math from "java.lang.Math"
import Random from "java.util.Random"

const num = Math.random()
const random = new Random()
```

## 导入 .hps 模块

HS 默认提供类似 JS commonjs 模块的动态模块导入机制（但语法累类似ESM），模块在用时被按需加载。

以下是合法的导入：

```js
// papi.hps 文件
import PAPI from "java:me.clip.placeholderapi.PlaceholderAPI"

export const papi = (str, __player) => {
  return PAPI.setPlaceholders(__player, str)
}
```

```js
// 另一个脚本中
// 普通的导入
import { papi } from "papi.hps"
// 重命名导入
import { papi as placeholder } from "papi.hps"
// 全部重命名导入
import * as PlaceholderAPI from "papi.hps"
```

之后可以分别用以下语句调用导入的函数、变量等：

```js
// 普通的导入
papi("Hello World! %player_name%")
// 重命名导入
placeholderapi("Hello World! %player_name%")
// 全部重命名导入
PlaceholderAPI.papi("Hello World! %player_name%")
```

以上四段代码的效果是完全相同的。
