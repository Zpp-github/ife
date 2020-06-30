## demo预览
- [ife任务.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/ife%E4%BB%BB%E5%8A%A1.html)

#### 两栏布局
- [两栏布局flex左右百分比.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/flex/%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80flex%E5%B7%A6%E5%8F%B3%E7%99%BE%E5%88%86%E6%AF%94.html)
- [两栏布局flex左固定右自适应.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/flex/%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80flex%E5%B7%A6%E5%9B%BA%E5%AE%9A%E5%8F%B3%E8%87%AA%E9%80%82%E5%BA%94.html)
- [两栏布局flex左自适应右固定.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/flex/%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80flex%E5%B7%A6%E8%87%AA%E9%80%82%E5%BA%94%E5%8F%B3%E5%9B%BA%E5%AE%9A.html)

#### 三栏布局
- [三栏布局flex左中固定右自适应.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/flex/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80flex%E5%B7%A6%E4%B8%AD%E5%9B%BA%E5%AE%9A%E5%8F%B3%E8%87%AA%E9%80%82%E5%BA%94.html)
- [三栏布局flex左右固定中自适应.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/flex/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80flex%E5%B7%A6%E5%8F%B3%E5%9B%BA%E5%AE%9A%E4%B8%AD%E8%87%AA%E9%80%82%E5%BA%94.html)

> 由于float、position方法与flex方法的效果图是相同的，便不展示了

#### 张鑫旭的三栏布局
- 绝对定位position：[three-column-width-auto-1.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/%E5%BC%A0%E9%91%AB%E6%97%AD%E7%9A%84%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/three-column-width-auto-1.html)
- margin负值：[three-column-width-auto-2.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/%E5%BC%A0%E9%91%AB%E6%97%AD%E7%9A%84%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/three-column-width-auto-2.html)
- 浮动本身float：[three-column-width-auto-3.html](https://zpp-github.github.io/ife/%E5%B8%83%E5%B1%80/%E5%BC%A0%E9%91%AB%E6%97%AD%E7%9A%84%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/three-column-width-auto-3.html)

<br/>
<br/>

## “ife任务”模板规范
### 一、命名规范
- 小驼峰命名法

### 二、HTML规范
####  1、DOCTYPE 声明
- 使用 HTML5 的文档声明

~~~html
  <!DOCTYPE html>
~~~

#### 2、页面语言lang
```html
  <html lang="zh-CN">
```
#### 3、charset 字符集合
```html
  <meta charset="UTF-8">
```

### 三、CSS规范
#### 1、代码格式化
- 采用展开格式（Expanded）
```css
.jdc {
    display: block;
    width: 50px;
}
```
#### 2、属性书写顺序
- 遵循以下顺序：
    - 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
    - 自身属性：width / height / margin / padding / border / background
    - 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
    - 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

### 四、代码主要命名介绍
className|含义
--|--
`.com`|版心(宽952px，水平居中)
`.clearfix`|清除浮动
`.current`|当前(可与JavaScript结合进行模块切换)
`header` |头部模块
`.logo`|logo模块(内部可放图片，现使用文字logo代替)
`#header`|“子绝父相的父”
`.banner`|网页导航模块
`.menu_tab`|导航模块
`.list`|导航模块的小列表
`.main`|主要内容
`.menu`|主要内容区域的导航
`.home_list`|主要内容区域的导航的对应内容
`.profile_list`|主要内容区域的导航的对应内容
`.about_list`|主要内容区域的导航的对应内容
`footer`|底部模块



### 五、主要代码使用方法
- `header`模块采用了绝对定位“子绝父相”
- `home_list`采用了flex排列盒子，又因为小盒子都有外边距，所以同时采用了margin负值法
- 两个相邻盒子有边框会出现加粗的情况，因为只是相邻，没有合并，可以使盒子向左移动，左边框正好压住上一个盒子的右边框，使两个边框合二为一。
```css
    /* 设边框宽度为1px */
    margin-left: -1px;
```
