### 课程目标
今天我们将进行这个任务系列的最后一课，学习Location，Hash等相关知识，来实现最后一个需求

### 简单
##### 阅读
- [Location | W3School](https://www.w3school.com.cn/jsref/dom_obj_location.asp)
- [location.hash详解](https://blog.csdn.net/baidu_31333625/article/details/54288223)
- [onhashchange | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onhashchange)

##### 需求
```js
<button id="a">A</button>
<button id="b">B</button>
<button id="c">C</button>
<div id="cont"></div>
```

- 基于以上HTML，点击对应按钮时候，改变div中的内容为按钮的文字。
- 刷新页面的时候，保持div中的显示
- 页面URL copy再打开后，保留渲染状态
- 通过location.hash来实现

### 设计
按照传统思路，我们会给3个按钮绑定一个事件，事件中来改变id为cont的div中的内容，但在这个小任务中，我们需要改变一下逻辑。
<br/>

这个需求中的关键，其实是在于通过URL中#后面的部分，来记录页面的状态，页面的渲染是由这个状态来驱动的。所以，点击按钮的时候，应该去做的事情，是更新这个状态。
<br/>

然后对于状态改变这件事情，增加一个事件响应，来进行渲染。所以整个伪代码变为：
```js
function 解析Hash，获取状态参数() {
    取到需要的值，并返回
}

function 渲染函数() {
    内容 = 解析Hash，获取状态参数()
    cont的innerHTML = 内容
}

按钮点击事件 = function() {
    设置新的hash
}

window.onhashchange = 渲染函数

进来先执行一次渲染函数()
```

#### 稍微复杂一点
##### 需求
```js
<button id="a">A</button>
<button id="b">B</button>
<button id="c">C</button>

<button id="d">D</button>
<button id="e">E</button>
<button id="f">F</button>


<div id="contABC"></div>
<div id="contDEF"></div>
```

现在我们需要记录两个状态
- abc点击了，把按钮文字显示在contABC中
- def点击了，把按钮文字显示在contDEF中
- 同样在页面刷新时，保留之前的渲染状态
- 页面URL copy再打开后，保留渲染状态

##### 设计
思路和前面一样，只是在获取状态参数的地方稍微复杂一点点，相信你能搞定的

### 正式来做报表的事情了
现在通过hash的方式
- 把用户的一些交互状态通过某种方式记录在URL中
- 分享或再次打开某个URL，需要从URL中读取到数据状态，并且进行页面呈现的还原
- 需要记录的状态包括：产品的选择以及地域的选择

### pushState
##### 阅读
- [ajax与HTML5 history pushState/replaceState实例](https://www.zhangxinxu.com/wordpress/2013/06/html5-history-api-pushstate-replacestate-ajax/)
- [H5，API的pushState()，replaceState()和popstate()作用，用法](https://blog.csdn.net/qq_31411389/article/details/60335817)
- [MVVM静态路由和动态路由](https://www.jianshu.com/p/21b90b47eb41)
##### 编码
用pushState等代替前面直接操作hash的方式，来实现前面2个小需求及报表页面的需求
