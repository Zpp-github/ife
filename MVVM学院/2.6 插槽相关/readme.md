#### 任务目的
熟悉 SAN 及 插槽的使用

#### 任务描述
- 如 [示例图](http://b.bdstatic.com/searchbox/icms/searchbox/img/slot.png) 中所示 一个任务栏中有多个任务卡片使用「插槽」方式实现其效果，
  - 该效果可能有多种更好更简单直观的方式实现，但此处需要用「插槽」方式来实现，练习 SAN 中插槽的使用以及提高组件灵活性；
- 要求
  - 「任务栏」 大标题需要支持：既可直接参数定义 又可简单的命名定义
```js
// 形如
<task-menu>
    <div slot="title"><p>test</p> {{test}} <p>test</p></div>
</task-menu>
// 和
<task-menu title="{{test}}"></task-menu>
```

- 具体任务卡片部分
  - 卡片任务说明标题`任务一、二、三...`正常显示 可不做特殊处理
  - 卡片任务说明具体内容`标题、内容、时间`
    - 使用 「scoped 插槽」 能让在渲染过程 使用组件内部数据
    - 使用插槽的「动态命名」 调用方可进行灵活处理，如：对`标题`进行加粗处理

#### 任务注意事项
- 要求功能实现与任务描述中完全一致
- 示例图仅为参考，样式不需要完全实现一致
- 实现中，尽可能考虑代码的可读性和可复用性
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释

#### 在线学习参考资料
- [https://baidu.github.io/san/tutorial/slot/](https://baidu.github.io/san/tutorial/slot/)
- [https://developers.google.com/web/fundamentals/web-components/shadowdom#slots](https://developers.google.com/web/fundamentals/web-components/shadowdom#slots)