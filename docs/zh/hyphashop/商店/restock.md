# 刷新

一个商店具体上架哪些商品可以是不固定的，商店的刷新（restock）即是重新筛选要上架的商品的过程。

与刷新有关的配置如下：

```yaml
settings:
  size: 19
  auto-restock:
    enabled: true
    period: 24h 10m
```

## size

每个商店都有自己的 `size` 配置，代表商店的容量（若不指定则为无限容量）。每次刷新时，商店都会从其 [商品列表](./index#商品列表) 中，依据它们的 [稀有度](../商品/rarity) 随机地挑选商品执行上架操作。被上架的商品会：

- 尝试刷新库存
- 获取新的价格缓存
- 获取新的物品缓存
- 获取新的数量缓存

:::tip
每次修改完商品配置后，若想让配置生效，需要用 `/hyphashop shop restock [商店 ID]` 刷新一次该商品所在的商店，因为商品在商店的状态只在 `restock` 期间更新。
:::

## auto-restock

这个配置控制商店是否会以 `period` 为周期自动刷新。

### enabled

是否自动刷新，不指定默认为 `false`。

### period

刷新周期，配置格式为 [时长字符串](../杂项/duration-format)
