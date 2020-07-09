## 预览
- [ife复杂网页.html](https://zpp-github.github.io/ife/4%E3%80%81ife%E5%A4%8D%E6%9D%82%E7%BD%91%E9%A1%B5%E7%BB%83%E4%B9%A0(html%2Bcss)/ife%E5%A4%8D%E6%9D%82%E7%BD%91%E9%A1%B5.html)

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
|name|description
--|--
`.bg`|空白部分(防止当浏览过低或过宽时，后面的内容会随着浏览器提升覆盖上方的内容)
`.circle_green`|绿色小圆圈
`.circle_blue`|蓝色小圆圈
`.application`|最左边的一列
`.aps`|小程序
`.bottom`|底部固定部分
`.nav`|第二列导航部分
`.progress`|进度条
`.messages`|右侧白色区域
`#dashboard_selected`|第二列dashboard中被选中的模块
`.user`|用户
`.dropdown`|下拉列表
`.detail`|左侧联系人
`.chat`|右侧聊天信息
`.search`|搜索框
`#time`|消息距离现在的时间
`#app`|使用何种app发送的消息
`.article`|内容
`.num`|聊天数目(包括本人)
`.operate_button_list`|上部操作台
`.button_list_right`|右侧区域的按钮列表
`.chat_detail`|聊天细节

### 五、主要方法
- 主要使用了`display: flex`和`position`布局
