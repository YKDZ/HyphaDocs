# 装饰属性

装饰属性是用于修饰基本物品的属性，用于给基本物品附加新的名称、说明，乃至附魔、药水效果等。

:::info
若你需要赋予物品各种 RPG 属性、技能，抑或是进行更复杂的物品定义，请选择更强大的第三方插件（如 [MMOItems](https://www.spigotmc.org/resources/mmoitems.39267/) 等）并通过 [基本物品](base) 设置导入到本插件。本插件不是物品库插件，不会在物品定义方面深究。
:::

## name

`name` 代表一个物品的显示名称，接受一个 **HS** 字符串作为值。

```javascript
name: "<red>物品名称"
name: "<red>这是属于 <white>${player_name} <red>的物品"
name: |
      const arr = ["<red>1", "<yellow>2", "<green>3"];
      arr[Math.floor((Math.random() * arr.length())];
```

## lore

`lore` 代表一个物品 Tooltip 中的说明部分，接受一个 **HS** 字符串或字符串数组的列表作为值。

```javascript
lore:
  - "第一行"
  - "<red>第二行"
lore:
  - ["第一行", "<red>第二行"]
  - "第三行"
```

若某一行返回的值为 `null`，则该行不会被显示。这种特性目前被用于在商品图标的 `lore` 配置中省略特定空行。

## amount

`amount` 代表一个物品的数量，接受一个 **HS** 数字作为值，若未显式指定则默认为 `1`。

```javascript
amount: 8
amount: 1 * 3
amount: Math.random() * 32
```

## armor-trim

`armor-trim` 代表盔甲纹饰，接受一个普通字符串作为值，格式为 `材质类型:纹饰类型`。

```yaml
# 紫水晶质:恼鬼盔甲纹饰
base: amethyst:vex
# 树脂质:眼眸盔甲纹饰
base: resin:eye
```

[材质类型](https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/TrimMaterialKeys.html) 的枚举值和 [纹饰类型](https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/TrimPatternKeys.html) 的枚举值都可以在 Paper API 中找到。

## glider

`glider` 代表滑翔能力，作用于任意盔甲，玩家穿戴了拥有滑翔能力的盔甲时可以像穿戴了鞘翅一样滑翔，接受一个普通布尔值作为值。

```yaml
glider: true
```

## flight-duration

`flight-duration` 代表烟花火箭的飞行时间，接受一个普通整数作为值。

```yaml
flight-duration: 3
```

## firework-effects

`firework-effects` 代表烟花火箭的视觉效果和烟火之星的附加效果，接受一个 HS 对象作为值。

```yaml
firework-effects:
  - "-t:BALL -c:[#FFFFFF, #123456] -fc:[#FFFFFF, #123456] -trail:false -flicker:true"
  - "-t:CREEPER -c:[#FFFFFF, #123456] -fc:[#FFFFFF, #123456] -trail:true -flicker:false"
```

## potion-custom-name

`potion-custom-name` 按 Paper API 文档中所述表示"药水物品翻译键的前缀"，不知作用为何。接受一个普通字符串作为参数。

```yaml
potion-custom-name: "xxx-xxx"
```

## potion-type

`potion-type` 代表药水的基本类型。一个 `base: potion` 只能获得一个无效果的基本药水，而为它设置 `potion-type` 则可以让它变成一个像原版酿造台产出的一样的有效果的基本药水。

它接受一个普通字符串作为值，字符串即为 [药水类型](https://jd.papermc.io/paper/1.21.4/org/bukkit/potion/PotionType.html) 枚举值的小写。

```yaml
# 用萤石粉加强等级的跳跃Ⅱ药水
potion-type: strong_leaping
# 用红石粉延长时间的剧毒药水
potion-type: long_poison
# 普通的夜视药水
potion-type: night_vision
```

## potion-color

`potion-color` 代表药水瓶内药水的颜色，接受一个普通字符串作为值，格式为 `# 开头的 RGB 颜色的十六进制表示（大小写无关）`。

```yaml
potion-color: "#ffd700"
```

## potion-effects

`potion-effects` 代表药水效果，接受一个普通字符串数组作为值，单行字符串格式为 `效果类型:持续时间:等级:是否是信标效果:是否显示粒子效果:是否显示图标`。

```yaml
potion-effects:
  - "night_vision:1000:1:true:true:true"
  - "resistance:1000:1:true:true:true"
  - "haste:1000:5:false:true:true"
  - "luck:1000:1:false:true:false"
```

其中持续时间以 `ticks` 为单位，[药水效果](https://jd.papermc.io/paper/1.21.4/org/bukkit/potion/PotionEffectType.html) 的枚举值可以在 Paper API 中找到。

## banner-patterns

`banner-patterns` 代表旗帜图案，接受一个普通字符串数组作为值，单行字符串格式为 `染料颜色:图案类型`。

```yaml
banner-patterns:
  - "YELLOW:bricks"
  - "RED:small_stripes"
  - "RED:border"
  - "RED:diagonal_up_left"
  - "RED:half_vertical_right"
  - "RED:rhombus"
```

越先被列出，图层越低。

所需 [染料颜色](https://jd.papermc.io/paper/1.21.4/org/bukkit/DyeColor.html) 的枚举值和 [图案类型](https://jd.papermc.io/paper/1.21.4/io/papermc/paper/registry/keys/BannerPatternKeys.html) 的枚举值可以在 Paper API Javadoc 中找到。

:::info
注意染料颜色枚举为大写，图案类型枚举则为小写。

:::

## enchantable

作者也不知道 `enchantable` 的作用是什么，只是按照 API 实现了它。它接受一个普通整数作为值。

```yaml
enchantable: 5
```

## enchantment-glint

`enchantment-glint` 代表一个物品的附魔光效，接受一个普通布尔值作为值，若为 false，则该物品就算被附魔也不会发光，反之就算没有被附魔也会发光。

```yaml
enchantment-glint: true
```

## enchantments

`enchantments` 代表武器、装备或附魔书的附魔，接受一个普通字符串列表作为值，单行字符串格式为 `附魔类型:等级`。

```yaml
enchantments:
  - "sharpness:5"
  - "knockback:1"
```

:::info
此处指定的附魔完全忽略等级上限或附魔类型冲突等限制。

:::

## item-flags

`item-flags` 用于隐藏物品显示的某些信息，如附魔、旗帜图案等等，常用于缩短 Tooltip 长度，接受一个普通字符串列表作为值，单行字符串即为 [ItemFlag](https://jd.papermc.io/paper/1.21.4/org/bukkit/inventory/ItemFlag.html) 枚举值的大写形式。

```yaml
item-flags:
  - HIDE_ENCHANTS
  - HIDE_ATTRIBUTES
  - HIDE_DYE
  - HIDE_ARMOR_TRIM
  - HIDE_STORED_ENCHANTS
```
