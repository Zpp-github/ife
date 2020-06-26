- 参考：[css calc()函数 | 菜鸟教程](https://www.runoob.com/cssref/func-calc.html) 、[css calc()函数 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

> 动态计算长度值

#### 语法
```css
  property: calc(expression)
  /* expression	必须，一个数学表达式，结果将采用运算后的返回值。 */
  /* width: calc(100% - 80px) */
```

#### 注释
- `+`和`-`运算符前后都需要保留一个空格
    - 例如：`width: calc(100% - 10px)`
    - 例如 `calc(50% -8px)`会被解析成为一个无效的表达式，解析结果是：一个百分比后跟一个负数长度值。而加有空白字符的、有效的表达式`calc(8px + -50%)`会被解析成为：一个长度后跟一个加号，再跟一个负百分比
- `*`和`/`这两个运算符前后不需要空白字符，但如果考虑到统一性，仍然推荐加上空白符
- 用`0`作除数会使HTML解析器抛出异常
- 任何长度值都可以使用`calc()`函数进行计算
- calc()函数使用标准的数学运算优先级规则
- 涉及自动布局和固定布局的表格中的表列、表列组、表行、表行组和表单元格的宽度和高度百分比的数学表达式，`auto`可视为已指定
- 支持版本：CSS3

#### 浏览器支持
- 表格中的数字表示支持该函数的第一个浏览器版本号。
- "webkit" 或 "moz" 或 "o" 指定的数字为支持该函数的第一个版本号前缀。

|函数|Google|IE|Firefox|Safari|Opera
--|--|--|--|--|--
calc()|26.0<br/>19.0 -webkit-|9.0|16.0<br/>4.0 -moz-|7.0<br/>6.0 -webkit-|15.0

#### 示例
- 获取当前可视屏幕宽度、高度
```css
  div {
    width: calc(100vw);
    height: calc(100vh);
  }
```

- % 父元素所设置的宽度(高度)的100%
```html
<style>
  .div1 {
      width: calc(100% - 50px);
      height: 100%;
      background-color: skyblue;
  }
</style>
<body>
    <div class="div1"></div>
</body>
```
```html
<style>
  .box {
      width: 200px;
      height: 100px;
      background-color: red;
  }

  .div1 {
      width: calc(100% - 50px);
      height: 100%;
      background-color: skyblue;
  }
</style>
<body>
    <div class="box">
        <div class="div1"></div>
    </div>
</body>
```

- 自动调整表单域的大小以适应其容器的大小
```html
<!-- form 元素自身使用了窗口可用宽度的 1/6，为了让form元素内部的input元素保持合适的大小，便再一次使用了calc()，让它的宽度为其容器的宽度减 1em -->
<style>
    input {
      padding: 2px;
      display: block;
      width: calc(100% - 1em);
    }
    
    #formbox {
      width: calc(100% / 6);
      border: 1px solid black;
      padding: 4px;
    }
</style>
<body>
    <form>
      <div id="formbox">
      <label>Type something:</label>
      <input type="text">
      </div>
    </form>
</body>
```

- 使用 CSS 变量嵌套使用 calc()
```html
/* 在所有的变量都被展开后，widthC 的值就会变成 calc( calc( 100px / 2) / 2)，然后，当它被赋值给 div1 的 width 属性时，所有内部的这些 calc()（无论嵌套的有多深）都将会直接被扁平化为一个括号（原文：be flattened to just parentheses），所以这个 width 属性的值就直接相当于 calc( ( 100px / 2) / 2) 了，或者说就变成 25px 了。 简而言之：一个 calc() 里面的 calc() 就仅仅相当于是一个括号。 */
<style>
    .div1 {
        --widthA: 100px;
        --widthB: calc(var(--widthA) / 2);
        --widthC: calc(var(--widthB) / 2);
        width: var(--widthC);
        height: 100px;
        background-color: skyblue;
    }
    .div2 {
        width: 25px;
        height: 100px;
        background-color: red;
    }
</style>
<body>
    <div class="div1"></div>
    <div class="div2"></div>
</body>
```

#### 课外知识
- 参考：[css单位 | 菜鸟教程](https://www.runoob.com/cssref/css-units.html)
##### 相对长度
> 相对长度单位指定了一个长度相对于另一个长度的属性。对于不同的设备相对长度更适用。

单位|描述
|--|--
em|它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px
ex|依赖于英文字母小 x 的高度
ch|数字 0 的宽度
rem|rem 是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小
vw|viewpoint width，视窗宽度，1vw=视窗宽度的1%
vh|viewpoint height，视窗高度，1vh=视窗高度的1%
vmin|vw 和 vh 中较小的那个
vmax|vw 和 vh 中较大的那个
%|

##### 绝对长度
> 绝对长度单位是一个固定的值，它反应一个真实的物理尺寸。绝对长度单位视输出介质而定，不依赖于环境（显示器、分辨率、操作系统等）。

单位|描述
--|--
cm|厘米
mm|毫米
in|英寸(1in = 96px = 2.54cm)
px|像素 (1px = 1/96th of 1in)<br/>px实际上是一个按角度度量的单位
pt|point，大约1/72英寸； (1pt = 1/72in)
pc|pica，大约6pt，1/6英寸； (1pc = 12 pt)