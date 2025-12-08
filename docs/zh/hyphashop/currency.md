---
order: 5
---

# 货币

目前支持的货币类型包括：

- `EXP`：经验点数
- `VAULT`：服务器中基于 Vault 插件的那个经济插件的货币

## 货币配置

货币相关的配置位于 `currency.yml`。

## base

插件的基本货币类型是什么，这将用于以下场景：

- 在价格相关的配置中不指定货币类型时，默认采用哪种货币
- 在 [自动矫正](./商品/price#自动矫正) 中使用

```yaml
base: VAULT
```

## exchange-rates

货币间汇率，主要用于 [自动矫正](./商品/price#自动矫正)。

```yaml{3-5}
base: VAULT

exchange-rates:
  # 1 VAULT = 16.5 EXP
  EXP: 16.5
```

若未定义某货币间汇率，则默认 `1:1`。
