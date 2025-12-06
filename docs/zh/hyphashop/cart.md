---
order: 6
---

# 购物车

购物车允许玩家将自己在各个商店中想要购买的商品集合在一起并统一结算，其在配置上表现为一个菜单。

玩家的默认购物模式是**直接交易**，通过点击商店菜单中的商品图标即可购入或出售商品。

若想要通过购物车交易，在默认配置中只需要将购物模式切换为**购物车交易**，之后再点击商品图标，即可将商品放入购物车。默认的操作流程大致如下：

![购物车效果](assets/购物车-20250901132739-9fckcqj.gif " =1280x720")

购物车交易降低了小规模交易的速度，但可以让玩家在购买大宗商品时统筹规划，计算详细的开支等，同时可以通过铁砧输入框实现便利地商品数量调整：

![购物车数量调整](assets/购物车-调整数量-20250901132739-asvbxgq.gif " =1280x720")

## 禁用购物车

你也可以通过调整菜单设置完全禁用这一系列功能，仅保留最基础的直接交易，以默认配置为例，仅需取消所有与购物车和购物模式相关的操作入口即可：

```yaml
shop-gui:
  product-icon:
    icon:
      actions:
        left:
          - sell_to{amount=1};
          - update_icon()
        right:
          - buy_from{amount=1};
          - update_icon()
        shift-right:
          - buy_all_from();
          - update_icon()
```

```yaml
shop-gui:
  icons:
    # 删除此图标
    "c":
      base: minecart
      name: " "
      lore:
        - "<dark_gray>✖ <white><key:key.mouse.left>"
        - "   <gray>打开购物车"
        - "<dark_gray>✖ <aqua><key:key.mouse.right>"
        - "   <gray>切换购物模式"
        - "   <gray>当前模式: <white>${term(shopping_mode_id)}"
        - " "
      actions:
        left:
          - open_cart()
        right: 
          - |
            Future.supply(() => switch_shopping_mode())
              .then(() => update_icon())
              .then(() => update_icon{target='d'});
```
