### 一、button练习
##### 代码片段
```html
<input id="name" type="text">    
<button id="submit-btn">Submit</button>
```

##### 要求
在HTML中增加上面的代码，然后通过JavaScript编写如下功能：
- 当点击按钮 submit-btn 时，在console中输出 name 中的内容
- 在输入过程中，如果按回车键，则同样执行上一条的需求
- 在输入过程中，如果按 ESC 键，则把输入框中的内容清空

##### 效果
- [7.1、btn.html](https://zpp-github.github.io/ife/7%E3%80%81%E5%92%8C%E9%A1%B5%E9%9D%A2%E5%AF%B9%E8%AF%9D/7.1%E3%80%81btn.html)

<br/>

### 二、控制元素的显示及隐藏
##### 代码片段
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>IFE ECMAScript</title>
    <style>
        select {
            display: none;
        }
    </style>
</head>

<body>
    <label>
        <input id="school" name="status" type="radio">
        School
    </label>
    <label>
        <input id="company" name="status" type="radio">
        Company
    </label>

    <select id="school-select">
        <option>北京邮电大学</option>
        <option>黑龙江大学</option>
        <option>华中科技大学</option>
    </select>

    <select id="company-select">
        <option>百度</option>
        <option>爱奇艺</option>
    </select>
</body>

</html>
```

##### 要求
在HTML中增加上面的代码，然后通过JavaScript编写如下功能：
- 当用户选择了 School 的单选框时，显示 School 的下拉选项，隐藏 Company 的下拉选项
- 当用户选择了 School 的单选框时，显示 Company 的下拉选项，隐藏 School 的下拉选项

##### 效果
- [7.2、modify_style.html](https://zpp-github.github.io/ife/7%E3%80%81%E5%92%8C%E9%A1%B5%E9%9D%A2%E5%AF%B9%E8%AF%9D/7.2、modify_style.html)

<br/>

### 三、
##### 代码片段
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>IFE ECMAScript</title>
    <style>
        .palette {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .palette li {
            width: 40px;
            height: 40px;
            border: 1px solid #000;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <ul class="palette">
        <li style="background-color:crimson"></li>
        <li style="background-color:bisque"></li>
        <li style="background-color:blueviolet"></li>
        <li style="background-color:coral"></li>
        <li style="background-color:chartreuse"></li>
        <li style="background-color:darkolivegreen"></li>
        <li style="background-color:cyan"></li>
        <li style="background-color:#194738"></li>
    </ul>

    <p class="color-picker"></p>

    <script>
        var list = document.querySelectorAll("li");
        for (var i = i = 0, len = list.length; i < len; i++) {
            list[i].onclick = function (e) {
                var t = e.target;
                var c = t.style.backgroundColor;
                var p = document.getElementsByClassName("color-picker")[0]
                p.innerHTML = c;
                p.style.color = c;

            }
        }
    </script>
</body>

</html>
```

##### 要求
在HTML中增加上面的代码，然后通过JavaScript编写如下功能：
- 点击某一个 Li 标签时，将 Li 的背景色显示在 P 标签内，并将 P 标签中的文字颜色设置成 Li 的背景色

##### 效果
- [7.3、eventDelegate.html](https://zpp-github.github.io/ife/7%E3%80%81%E5%92%8C%E9%A1%B5%E9%9D%A2%E5%AF%B9%E8%AF%9D/7.3、eventDelegate.html)

<br/>

### 四、淡入淡出动画练习
##### 代码片段
```html
<div id="fade-obj" style="width:300px;height:300px;background:#000"></div>
<button id="fade-btn">淡出</button>
```

##### 要求
针对以上 HTML，分别使用 setTimeout 和 setInterval 实现以下功能：
- 点击按钮时，开始改变 fade-obj 的透明度，开始一个淡出（逐渐消失）动画，直到透明度为0
- 在动画过程中，按钮的状态变为不可点击
- 在动画结束后，按钮状态恢复，且文字变成“淡入”
- 在 按钮显示 淡入 的状态时，点击按钮，开始一个“淡入”（逐渐出现）的动画，和上面类似按钮不可点，直到透明度完全不透明
- 淡入动画结束后，按钮文字变为“淡出”
- 暂时不要使用 CSS animation （以后我们再学习）

##### 效果
- [7.4、setInterval.html](https://zpp-github.github.io/ife/7%E3%80%81%E5%92%8C%E9%A1%B5%E9%9D%A2%E5%AF%B9%E8%AF%9D/7.4、setInterval.html)

<br/>

### 五、实现一个帧动画
##### 要求
基于一个我们提供的图片，实现 IFE2016中Erik笑容的动画
- 图片地址：[http://ife.baidu.com/2016/static/img/erik_ce204002.jpg](http://ife.baidu.com/2016/static/img/erik_ce204002.jpg)
>注意，依然不要使用 CSS animation，因为我们这里要学习的是使用 JavaScript 来操作 CSS，而不是为了完成这个任务。

##### 效果
- [7.5、Erik_smile.html](https://zpp-github.github.io/ife/7%E3%80%81%E5%92%8C%E9%A1%B5%E9%9D%A2%E5%AF%B9%E8%AF%9D/7.5、Erik_smile.html)
