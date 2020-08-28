#### 任务目的
- 学习并实践CSS过渡动画的使用方法
- 学习如何在San中使用s-transition指令实现过渡动画

#### 任务描述
已知 san 组件：
```js
<template>
<div>
  <button on-click="toggle">TOGGLE</button>
  <span s-if="show" s-transition="hook">
    Transition Layer
  </span>
</div>
</template>

<script>
export default {
  initData() {
    return {show: true};
  },
  toggle() {
    this.data.set(!this.data.get('show'));
  },
  hook: {/* your answer */}
}
</script>

<style>
.enter, .leave {
  transition: all .5s;
}

.before-enter, .leave {
  opacity: 0;
}

.enter, .before-leave {
  opacity: 1;
}
</style>
```

实现该组件的 hook 成员，利用 s-transition 指令抽象已知组件样式中定义的四个 CSS 钩子达到以下效果：
<br/>

点击按钮时，组件的 span 元素执行淡入 / 淡出的动画。

#### 注意事项
- 使用s-transition指令实现这一效果

#### 在线学习资料
San的s-transition指令：[https://baidu.github.io/san/tutorial/transition/](https://baidu.github.io/san/tutorial/transition/)