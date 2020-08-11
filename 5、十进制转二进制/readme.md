- [integer_unlimitedDigits.html](https://zpp-github.github.io/ife/5%E3%80%81%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6/integer_unlimitedDigits.html)

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>将输入的十进制非负整数转化为二进制(不限位数)</title>
</head>

<body>
    <input id="dec-number" type="number" placeholder="输入一个十进制非负整数">
    <button id="trans-btn">转化为二进制</button>
    <p id="result">运算结果</p>
    <script>

        function dec2bin(decNumber) {
            // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
        }

// 实现当点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的所在标签内
// Some coding

    </script>
</body>

</html>
```

<br/>

- [integer_limitedDigits.html](https://zpp-github.github.io/ife/5%E3%80%81%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6/integer_limitedDigits.html)

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>将输入的十进制整数转化为二进制(限位数)</title>
</head>

<body>
    <input id="dec-number" type="number" placeholder="输入一个十进制非负整数">
    <input id="bin-bit" type="number" placeholder="输入转化后二进制数字位数">
    <button id="trans-btn">转化为二进制</button>
    <p id="result">运算结果</p>
    <script>

        function dec2bin(decNumber) {
            // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
            // 这里是上一个任务的实现
        }

// 实现当点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的所在标签内
// 新的需求是，转化显示后的二进制数为bin-bit中输入的数字宽度，例如
// dec-number为5，bin-bit为5，则转化后数字为00101
// 如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错
// Some coding

    </script>
</body>

</html>
```
