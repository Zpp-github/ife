## 预览
- [ife复杂网页.html](https://zpp-github.github.io/ife/4%E3%80%81ife%E5%A4%8D%E6%9D%82%E7%BD%91%E9%A1%B5%E7%BB%83%E4%B9%A0(html%2Bcss)/ife%E5%A4%8D%E6%9D%82%E7%BD%91%E9%A1%B5.html)

> 练习切图、html、css

#### 设计稿参考：
- PSD：链接: [https://pan.baidu.com/s/1BygIXhCnNGjs1KzK6l5bZQ](https://pan.baidu.com/s/1BygIXhCnNGjs1KzK6l5bZQ) 密码: h29s

#### 说明
- 最左侧一列要求自适应浏览器高度，左上面4个按钮相对浏览器左上角固定位置，左下方两个按钮相对浏览器左下角固定位置
- 左侧第二列(蓝色背景色)导航列固定宽度，高度也是自适应浏览器高度，最下面的Monthly Goals部分的内容相对浏览器下边固定位置
- 整个白色区域自适应宽度，右上方的人脸，名字部分相对浏览器右上角固定位置
- 白色区域左侧列固定宽度，右侧列自适应宽度
- 目前不需要考虑兼容IE浏览器

<br/>

## ife简单网页规范
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
`.com1`|版心(宽1600px，水平居中)
`.com2`|版心(宽1170px，水平居中)
`.com3`|版心(宽970px，水平居中)
`.fl`|`float: left;` 左浮动
`.fr`|`float: right;` 右浮动
`.clearfix`|清除浮动
`.current`|当前(可与JavaScript结合进行模块切换)
`.mask`|透明灰色遮罩
`header` |头部模块
`.title`|标题模块
`.sTitle`|副标题
`.login`|登录模块
`#name`|用户名
`#pwd`|用户密码
`#btn`|登录模块提交按钮
`.policies`|中国智能车配套政策模块
`footer`|底部模块

### 主要使用方法
- 不设置盒子大小，使用padding和margin撑开盒子的方法居多，方便以后添加内容
- 浮动可使用`float`、`position`、`flex` (记得清除浮动)
