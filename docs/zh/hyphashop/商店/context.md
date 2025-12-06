# 上下文

可以在商店设置中定义商店级别的上下文，在商店被加载时计算完成：

```yaml
settings:
  context: |
    const i = {}
    const title = (uuid) => {
      i[uuid] = (i[uuid] == null ? 0 : i[uuid]) + 1
      return titles[(i[uuid] - 1) % titles.length()]
    }
```