# 商人模式

商人模式的商店拥有自己的余额，在余额消耗完后，商店将无法从玩家处收购商品。

你可以通过商店的 settings 配置块将商店配置为商人模式：

```yaml
settings:
  merchant:
    balance: 1000
    replenish: true
    overflow: true
    inherit: true
```

四个配置键含义如下：

- **balance**：该商店最初拥有的余额数量
- **replenish**：余额是否能被玩家的购买行为补充，如玩家从商店购买了 2000 元的商品，则商店自己的余额会同步增加 2000
- **overflow**：余额被补充时是否可以超过其初始值，如商店现有余额 800 元，初始余额 1000 元，现在玩家购买了 300 元的商品，若 overflow 为 false，则商店余额只会被补充为 1000 元而非 1100 元
- **inherit**：商店刷新（restock）后，余额是否会被继承，若不继承，则重置为 balance 值。
