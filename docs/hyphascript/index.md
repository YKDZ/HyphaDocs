# HyphaScript

`HS` 是一个运行在 JVM 平台的轻量级脚本语言解释器，语法和特性类似 JS，最初被设计用于为 Minecraft Paper 插件的 `.yml` 配置添加动态特性。

其语法树（AST）由一个自行实现的 `Pratt Parser` 构建。

它可以作为库被包含到任意 `PaperMC` 插件中。

目前它广泛参与 `Hypha` 系列插件的配置，为它们带来了极强的扩展性。

- 如果你有 `JavaScript` 基础，那么学习和使用 HS 应该是很简单的，因为它的大部分基本语法都与 JS 相同。
- 如果你没有相关基础，HS 也为您提供了各种便利机制助您学习，相信您一定可以掌握。

相关代码可以在 [GitHub 仓库](https://github.com/YKDZ/HyphaScript) 上找到。

## 特性

- 原生支持 Adventure API 中 Component 的模板字符串和 `+` 运算
- 利用 `BigDecimal` 储存数字
- 支持数组和字符串切片语法
- 支持 `func{arg1="1", arg2="2"}` 的更利于在配置中使用的函数调用方式
- 简易的词法作用域机制
- 支持通过 `ScriptObject` 和 `MethodHandle` 注册原生 Java 函数
- 自带常用的与 Minecraft 环境交互的相关函数，如 `message(msg)` 和 `tp_to_player(player_name)`

## 与 Skript 相比如何

与 [Skript](https://github.com/SkriptLang/Skript) 不同，它不被设计用于为游戏本体扩展玩法和功能。

‍
