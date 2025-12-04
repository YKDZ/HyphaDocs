# 类型

HS 中定义了几种基本数据类型：

## 空

- **typeof 字符串值**: `VOID`
- **底层类**: `null`

**示例**:

```js
function test() {
  console.log("call")
}

// 此时 a 的值为 VOID
const a = test()
```

## null

- **typeof 字符串值**: `NULL`
- **底层类**: `null`

**示例**:

```js
const a = null
```

## 数字

- **typeof 字符串值**: `NUMBER`
- **底层类**: `BigDecimal`

**示例**:

```js
const a = 1
```

## 字符串

- **typeof 字符串值**: `STRING`
- **底层类**: `String`

**示例**:

```js
const a = "A"
const b = 'B'
```

## 布尔值

- **typeof 字符串值**: `BOOLEAN`
- **底层类**: `boolean`

**示例**:

```js
const a = true
```

## 对象

- **typeof 字符串值**: `SCRIPT_OBJECT`
- **底层类**: `ConcurrentHashMap<String, Reference>`

**示例**:

```js
const a = {
  b: 1,
}
```

## 函数

- **typeof 字符串值**: `FUNCTION`
- **底层类**: [Function](https://github.com/YKDZ/HyphaScript/blob/main/src/main/java/cn/encmys/ykdz/forest/hyphascript/function/Function.java)

**示例**:

```js
const a = () => "function"
```

## 数组

- **typeof 字符串值**: `ARRAY`
- **底层类**: `Reference[]`

**示例**:

```js
const a = [1, [2, 3]]
```

## Java 类

- **typeof 字符串值**: `JAVA_CLASS`
- **底层类**: `Class<?>`

**示例**:

```js
import "java.lang.String"
const a = String
```

## Java 方法

- **typeof 字符串值**: `JAVA_METHOD_HANDLES`
- **底层类**: `MethodHandle[]`

**示例**:

```js
const methods = "str".split
```

## Java 对象

- **typeof 字符串值**: `JAVA_OBJECT`
- **底层类**: `Object`

**示例**:
除了 VOID 和 NULL 外任何一个数据类型本质上都是 Java 对象

你可以用 `typeof` 运算符获取任何一个值的内部类型，此运算符的返回值是字符串，一个例子如下：

```js
const a = 5
console.log(typeof a)
console.log(typeof a == "NUMBER")
```

以上代码输出：

```js
NUMBER
true
```
