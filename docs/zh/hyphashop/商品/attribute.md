# 属性

一个商品配置项可以有若干属性：

## icon

商品图标 `icon` 决定一个商品在商店菜单中显示的样子，其配置格式为 [物品定义](../物品定义/index)。

若不指定，则默认为 `item` 对应的物品。

一个商品至少要有 `icon` 或 `item` 中的任意一个配置。

## item

商品物品 `item` 若被指定（且没有 `bundle-contents` 被指定），则此商品变为 [物品商品](./type#物品商品)，且交易的具体物品即为此配置对应的物品。其配置格式为 [物品定义](../物品定义/index)。

## bundle-contents

捆绑包内容若被指定，则此商品变为捆绑包商品，其交易的内容为配置中列出的所有商品的集合。其配置格式为：

```yaml{4-7}
TEST_BUNDLE:
  icon:
    base: chest
  bundle-contents:
    - PRODUCT_1
    - PRODUCT_2:8
    - PRODUCT_3:4
```

每一个数组项目的含义为 `商品 ID:份数`，其中份数若不指定则默认为 `1`。

份数的含义是一个捆绑包中有多少份某商品，需要与一个物品商品的 `amount` 配置区分开来。例如，若 `PRODUCT_2` 的配置为：

```yaml{4}
PRODUCT_2:
  item:
    base: diamond
    amount: 32
```

则此捆绑包一份将交易 `32 * 8 = 256` 颗钻石。

## buy-price

称为“出售价”，代表玩家购买一份此商品需要向商店支付多少钱，配置格式详见 [价格](./price)。

## sell-price

称为“收购价”，代表玩家向商店出售一份此商品可以赚得多少钱，配置格式详见 [价格](./price)。

## rarity

商品的稀有度，详见 [稀有度](./rarity)。

## stock

商品的库存，详见 [库存](./stock)。

## cacheable

一个物品商品的 `item` 是否可以在上架时被缓存，默认为 `true`。

从 `item` 配置生成商品物品是一个慢操作，在上架时缓存一次物品可以大大提高插件的性能。但是，这将导致所有涉及随机的或随被交易时的环境而变化的属性都无法工作，例如：

```yaml
GIFT:
  item:
    base: diamond
    name: "A gift to ${papi('%player_name%')}"
  cacheable: true
```

此商品被设置为不可缓存，则它的物品名会在上架时被确定，则所有玩家购买到的钻石的名称都是 `A gift to`，因为只有交易期间才有 `__player` 对象。

## context <Badge type="tip" text="HS" />

商品绑定的 HS 上下文，接受一个字符串作为值，在商品加载阶段即被计算。

## actions <Badge type="tip" text="HS" />

定义特定事件钩子被触发时执行的操作，具体的钩子参见 [事件钩子](./event-hook)。

```yaml{7-10}
WARM_WELCOME:
  icon:
    base: sunflower
    name: "<white>Warm welcome from server"
  sell-price:
    disable: true
  actions:
    on-give:
      - command{cmd=`tell ${player_name} Welcome ${player_name}!`}
      - command{cmd=`tell ${player_name} Have fun!`, repeat=3}
```