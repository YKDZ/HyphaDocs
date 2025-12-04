---
order: 2
---

# 商品

商品是由图标、实际商品、价格和库存等杂项属性组成的整体。

一个典型的物品商品例子如下：

```yaml
MAGIC_ORANGE_WOOL:
  icon:
    lore:
      - "<gray>这是个魔法羊毛."
  item:
    base: orange_wool
    name: "<green>魔法橙色羊毛"
    lore:
      - "<gray>与其他羊毛不同的是,"
      - "<gray>这个羊毛在被购买时"
      - "<gray>会带上一条自定义 lore."
  sell-price:
    disable: true
```

这个羊毛在游戏内表现如下：

![橙色羊毛的效果](assets/商品-20250901132739-9az87ea.gif " =1280x428")
