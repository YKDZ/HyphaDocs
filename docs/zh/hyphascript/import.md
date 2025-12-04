# 导入

`import` 开头的语句被视为导入。

以下内容可以被导入语句导入到当前脚本中。

## Java 类

用以下语法导入一个 Java 类：

```js
import "java.util.Random" from "java"
```

之后你可以像原生 Java 代码一样调用其中的静态方法或 `new` 一个实例等：

```js
import "java.lang.Math"
import "java.util.Random"

const num = Math.random()
const random = new Random()
```

## 其他 .hps 文件导出的内容

所有在 `ScriptManager` 中注册的脚本（`Script` 对象）以及在 `InternalObjectManager` 中注册的内部对象（`InternalObject` 的实现）都可以被其他脚本导入。

以下是合法的导入：

```js
// papi.hps 文件
import "me.clip.placeholderapi.PlaceholderAPI" from "java"

export const papi = (str, __player) => {
  return PlaceholderAPI.setPlaceholders(__player, str)
}
```

```js
// 另一个脚本中
// 普通的导入
import { papi } from "papi"
// 重命名导入
import { papi as placeholder } from "papi"
// 全部重命名导入
import * as PlaceholderAPI from "papi"
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

:::info
函数包在内部的处理与普通脚本中定义的函数完全相同，导入的语法也相同。
:::
