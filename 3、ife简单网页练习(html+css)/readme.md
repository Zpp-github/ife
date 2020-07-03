## 预览
- [ife简单网页.html
](https://zpp-github.github.io/ife/3%E3%80%81ife%E7%AE%80%E5%8D%95%E7%BD%91%E9%A1%B5%E7%BB%83%E4%B9%A0(html%2Bcss)/ife%E7%AE%80%E5%8D%95%E7%BD%91%E9%A1%B5.html)


## ife简单网站规范
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
