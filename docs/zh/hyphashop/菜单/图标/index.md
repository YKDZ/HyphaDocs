# 图标

图标是菜单的一部分，由一个物品定义和若干杂项属性组成。

一个典型的图标配置如下：

```yaml
icons:
  "p":
    base: red_stained_glass_pane
    name: "<gray>上一列"
    actions:
      left:
        - scroll{amount=-1}
    icons:
      - condition: current_line == 0
        icon:
          base: black_stained_glass_pane
```

其中 `"p"` 是其在 `structure` 中定义的显示位置对应的字符，`base` 和 `name` 是 [物品定义](../../物品定义/index)、`actions` 是 [事件钩子](./event-hook)、`icons` 是 [图标属性](./icon-decorator) 中的子图标设置。
