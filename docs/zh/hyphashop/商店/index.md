---
order: 1
---

# 商店

商店是商品的容器，其由商品列表、商店菜单和一系列杂项设置组成。

## 商品列表

商店配置文件中的 `products` 键定义商品列表：

```yaml
products:
  - PACK:wools
  - PACK:ores
  - PACK:sculk
```

```yaml
products:
  - WARM_WELCOME
  - FLY_PERMISSION
  - LONG_SWORD
```

其接受一个字符串列表作为值，每一个值有以下两种情况：

- `PACK:商品包 ID` 会导入商品包（`product/misc.yml` 即为一个商品包，ID 为 `misc`）中的所有商品
- 其他情况下，会将值视为 `商品 ID`，尝试导入指定 ID 的商品

## 商店菜单

详见 [商店 GUI](./shop-gui)
