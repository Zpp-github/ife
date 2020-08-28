#### 任务目的
- 了解递归思想
- 学习san.js如何递归调用组件
- 实现一个简单的Cascader级联组件

#### 任务描述
请根据学习资料及自己的理解，开发一个递归级联组件，要求如下：

- 数据结构
```js
[{
    value: 'zhinan',
    label: '指南',
    children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
            value: 'yizhi',
            label: '一致'
        }, {
            value: 'fankui',
            label: '反馈'
        }, {
            value: 'xiaolv',
            label: '效率'
        }, {
            value: 'kekong',
            label: '可控'
        }]
    }, {
        value: 'daohang',
        label: '导航',
        children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
        }, {
            value: 'dingbudaohang',
            label: '顶部导航'
        }]
    }]
},  {
    value: 'ziyuan',
    label: '资源',
    children: [{
        value: 'axure',
        label: 'Axure Components'
    }, {
        value: 'sketch',
        label: 'Sketch Templates'
    }, {
        value: 'jiaohu',
        label: '组件交互文档'
    }]
}]
```

- 可以通过递归数据进行渲染
- 点击一级菜单，弹出下一级菜单

#### 任务注意事项
- 使用san.js组件中调用自身的方法 san.js - self
- 注意递归数据时的性能问题
- 注意递归组件向上派发事件以及接收事件时的处理

#### 在线学习参考资料
- [https://github.com/baidu/san](https://github.com/baidu/san)
- [ElementUI - 级联选择器](https://element.eleme.cn/#/zh-CN/component/cascader#cascader-ji-lian-xuan-ze-qi)
- [知乎 - 什么是递归？](https://www.zhihu.com/question/20507130)