# 面向对象

HS 拥有简单的、基于**原型链**的面向对象特性。

每个脚本创建的对象都有一个原型属性，这个原型属性的值也是一个对象。

原型链的终点是 `null`。

使用字面量对象语法创建的对象，其原型是根原型对象（原型为 `null` 的对象），例如：

```js
const obj = {
  name: "YKDZ",
  age: 18,
}

// 输出 true
console.log(obj.__proto__.__proto__ == null)
```

使用构造函数创建的对象的原型则自动指向函数的原型，例如：

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
const person = new Person("YKDZ", 18)

// 输出 true
console.log(person.__proto__ == Person.prototype)
```

可以使用类似 JS 的方式构建继承关系：

```js
import "Object"
import "console"

function Animal(sex) {
  console.log("In Animal")
  this.sex = sex
}

Animal.prototype.getSex = () => this.sex
Animal.kingdom = "Animalia"

function Cat(name, age, sex) {
  console.log("In Cat")
  Animal.call(this, [sex])
  this.name = name
  this.age = age
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.__proto__ = Animal

Cat.meow = () => console.log("Meow~")

function CuteCat() {
  console.log("In CuteCat")
  Cat.call(this, ["Hina", 17, false])
}

CuteCat.prototype = Object.create(Cat.prototype)
CuteCat.prototype.constructor = CuteCat
CuteCat.__proto__ = Cat

const cat = new CuteCat()

Cat.meow()
console.log(Cat.kingdom)
console.log(cat.name)
console.log(cat.getSex())
```

以上代码的执行结果为：

```txt
In CuteCat
In Cat
In Animal
Meow~
Animalia
Hina
false
```

当然也可以使用 `class`、 `extends` 和 `static` 语法糖构建有继承关系、实例成员和静态成员的类：

```js
import "console"
import "Object"

class Animal {
    constructor: (sex) => {
        console.log("In Animal")
        this.sex = sex
    },
    getSex: () => this.sex,
    static kingdom: "Animalia"
}

class Cat extends Animal {
    constructor: (name, age, sex) => {
        console.log("In Cat")
        super(sex)
        this.name = name
        this.age = age
    },
    static meow: () => console.log("Meow~")
}

class CuteCat extends Cat {
    constructor: () => {
        console.log("In CuteCat")
        super("Hina", 17, false)
    }
}

const cat = new CuteCat()

Cat.meow()
console.log(Cat.kingdom)
console.log(cat.name)
console.log(cat.getSex())
```

以上代码与直接操作 `prototype` 所得的结果完全相同：

```txt
In CuteCat
In Cat
In Animal
Meow~
Animalia
Hina
false
```

另外，对于 `this` 和 `super` 的指向：

- `super` 在构造函数中指向其直接父类，如在 Cat 的构造函数中 `super` 指向 `Animal`，可以使用 `super.kingdom` 访问到其静态成员
- `this` 在构造函数中指向一个原型为被 `new` 调用的函数的 `prototype` 的对象，如在 `new Cat()` 时，在 `Cat` 和 `Animal` 构造函数中，`this` 都指向一个空对象（假设为 `obj`），它满足：`obj.__proto__ == Cat.prototype`

## 与 JS 的共同点

`class` 的本质是一个用于避免直接操作 prototype 的语法糖，这一点与 JS 相同。

## 区别于 JS

语法上，HS 的 `class` 语法实际上在模仿 [对象字面量](https://node.encmys.cn:19200./字面量/对象.md)：

```js
const obj = {
  kingdom: "Animalia", // 用逗号分隔一系列成员键值对
  func: () => console.log("Arrow function in literal object.")
}

class Animal {
    constructor: (sex) => {
        console.log("In Animal")
        this.sex = sex
    }, // 用逗号分隔一系列成员键值对
    getSex: () => this.sex,
    static kingdom: "Animalia"
}

class Cat extends Animal {
    constructor: (name, age, sex) => {
        super(sex)
        this.name = name
        this.age = age
    }
}
```

以上代码实际上是：

1. 在原型为 `Function` 的 `Animal` 对象上的 `prototype` 成员上注册了 `constructor` 和 `getSex` 两个成员，其值都是一个函数，并在 `Animal` 对象本身上注册了 `kingdom` 这一静态成员，其值为一个字符串
2. 将原型为 `Animal` 的 `Cat` 对象上的 `prototype` 成员赋值为一个原型为 `Animal.prototype` 的对象，并在这个对象上注册 `constructor` 成员，其值为一个函数

可以执行以下代码验证上述操作：

```js
// 输出 true
console.log(Cat.prototype.__proto__ == Animal.prototype)
// 输出 true
console.log(Cat.__proto__ == Animal)
```
