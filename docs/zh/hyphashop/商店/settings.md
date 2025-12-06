# 设置

在 `settings` 块进行商店本身的属性的设置。

## name <Badge type="tip" text="HS" />

指定商店的显示名称。

## actions

指定特定商店相关的事件被触发时执行的操作，详见 [事件钩子](./event-hook)。

```yaml
settings:
  actions:
    on-restock:
      - broadcast{msg=`<gray>Block shop refreshed!`}
```

## context

定义商店级别的上下文，在商店加载时即被计算并保存，详见 [上下文](./context)。

## 商人模式

详见 [商人模式](./merchant)。

## 刷新

详见 [刷新](./restock)。
