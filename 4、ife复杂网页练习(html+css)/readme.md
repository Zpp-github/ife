## 预览

<br/>
<br/>

## ife复杂网页规范
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


### 主要使用方法

