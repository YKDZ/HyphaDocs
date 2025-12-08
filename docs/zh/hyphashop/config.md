---
order: 4
---

# 主配置

主配置即为 `config.yml`：

## language

```yaml
language:
  default-message: en-US
```

插件本身会通过玩家的客户端语言配置自动选择要应用的语言文件，但若对应语言文件不存在，则会用这里配置的语言文件做回退。

## period

```yaml
period:
  save-data: 5m
  check-restocking: 3s
```

插件内部定时任务的周期，配置值格式为 [时长字符串](./杂项/duration-format)：

### save-data

隔多久保存一次插件数据。

### check-restocking

隔多久检查一次商店是否需要 [刷新](./商店/restock)。

## database

```yaml
database:
  sqlite:
    enabled: true
```

插件使用的数据库，目前仅支持 `SQLite`。

## script

```yaml
script:
  unpack-internal-object: true
```

[`HS`](../hyphascript/index) 脚本相关配置：

### unpack-internal-object

是否解包导入插件内部定义的工具函数（`sell_to`、`buy_from` 等等）到根上下文，若为 `false` 则需要通过包名引用，比如 `HyphaShopAction.sell_to(1)`。

## price-correct-by-disable-sell-or-buy

在价格出错时如何纠正，详见 [自动矫正](./商品/price#自动矫正)。

## debug

是否在控制台输出 debug 日志。

## version

版本控制，请勿修改。
