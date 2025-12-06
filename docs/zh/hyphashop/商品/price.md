# 价格

商品拥有两种价格，分别是：

- 出售价格（`buy-price`）：该商品被出售给玩家的价格，或者说玩家从商店购买此商品时需要的花销
- 收购价格（`sell-price`）：商店从玩家处收购这个商品的价格，或者说玩家将商品出售给商店时的收入

两种价格的配置格式相同。

## 价格类型

有以下几种价格类型：

### 固定价格

用以下格式定义一个固定的价格：

```yaml
buy-price:
  fixed: 32
  currency: VAULT
```

顾名思义，这种商品的价格是一个固定值，不会随着商店刷新（restock）而产生任何变化。

### 正态分布价格

用以下格式定义一个正态分布的价格：

```yaml
buy-price:
  mean: 100
  dev: 20
```

其中 `mean` 代表价格的**均值**，`dev` 则代表价格的**标准差**，每次商店刷新（restock）时，会生成一个符合给定均值和标准差的正态分布随机数。

### 最大最小值价格

用以下格式定义一个最大最小值价格：

```yaml
buy-price:
  min: 10
  ma: 30
```

其中 `min` 代表最小值， `max` 代表最大值，每次商店刷新（restock）时，会生成一个范围在 `[min, max]` 之间的随机数作为价格。

### 公式价格 <Badge type="tip" text="HS" />

包含 `formula` 的价格配置即被视为公式价格：

```yaml
buy-price:
  formula: calculateDynamicPrice(total_history_bought_amount, total_history_sold_amount, 50, product_amount)
  context: |
            function calculateDynamicPrice(historyBought, historySold, basePrice, amount) {
                const ELASTICITY = 0.15;
                const SMOOTH = 50;
                const MIN_MULT = 0.4;
                const MAX_MULT = 2.5;

                const marketPressure = (historyBought - historySold) / SMOOTH;

                const multiplier = 1 + marketPressure * ELASTICITY;

                const clampedMultiplier =
                    Math.max(MIN_MULT, Math.min(MAX_MULT, multiplier));

                const amountFactor = 1 + Math.log10(amount + 1) * 0.05;

                return basePrice * clampedMultiplier * amountFactor;
            }
```

你可以通过此机制实现任何你想要的动态价格方式。

### 禁用价格

包含 `disable: true` 的价格即为被禁用的价格。

```yaml
buy-price:
  disable: true
```

你也可以通过不指定某个价格的配置来禁用一个价格，例如：

```yaml
products:
  TEST:
    item:
      base: diamond
    sell-price:
      fixed: 512
```

在上述情况下，`buy-price` 默认就是被禁用的。

`disable` 设置主要用来覆盖默认设置中的配置，例如：

```yaml
default-settings:
  buy-price:
    fixed: 1024

products:
  TEST:
    item:
      base: diamond
    buy-price:
      # 若不指定，则此商品会继承默认配置
      diable: true
    sell-price:
      fixed: 512
```

## 四舍五入

你可以在任何价格设置中插入一个四舍五入配置：

```yaml{4,10,14}
buy-price:
  min: 20
  max: 30
  round: 2

sell-price:
  - currency: EXP
    mean: 5
    dev: 2
    round: 0
  - currency: EXP
    min: 20
    max: 5
    round: 3
```

这代表将价格自动四舍五入到指定的位数，如 `0` 代表四舍五入到整数（个位）、`2` 代表四舍五入到小数点后两位、`-3` 代表四舍五入到千位等。

## 自动矫正

一个商品的出售价可能因为各种原因低于其收购价，这将导致刷钱 BUG，比如：

- 某一个价格是随机生成的，随机区间与另一个价格有重叠
- 粗心而错误配置了价格

插件将会识别这种错误，并在错误发生时根据 `config.yml` 中的 `price-correct-by-disable-sell-or-buy` 配置来决定是在本次上架中禁用收购还是出售以临时解决此问题。

具体地，识别规则如下：

- 若收购价或出售价不存在，视为检查通过
- 在两种价格都存在的基础上，插件将会根据 [货币汇率](../currency#exchange-rates) 中定义的汇率，将一个商品的出售价和收购价全部转换为 [基本货币](../currency#base) 的和，并比较大小，若 `出售价 > 收购价` 则视为检查通过，否则执行自动矫正

一个示例如下：

```yaml{14-20}
# currency.yml
base: VAULT
exchange-rates:
  EXP: 3

# product
EXP_BOTTLE:
  item:
    base: experience_bottle
  icon:
    lore:
      - "<gray>Pour your experience"
      - "<gray>into the bottle"
  buy-price:
    - fixed: 7
      currency: EXP
    - fixed: 5
      currency: VAULT
  sell-price:
    fixed: 8
```

这个商品的价格会被视为配置错误，将在上架时被自动矫正：

```bash
[HyphaShop] Buy price ({VAULT=5.0, EXP=7.0}) <= sell price({VAULT=8.0}) for EXP_BOTTLE. Disabling sell.
```
