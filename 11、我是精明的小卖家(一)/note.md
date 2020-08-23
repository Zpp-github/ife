### 目录
- 原生js和jQuery获取select选中的值
  - 原生js
  - jQuery
- 箭头函数(Arrow Function)`=>`
- 表格双边框合并为单一边框
- 删除全部子节点
- 汉字根据拼音排序
- 零碎知识点

---

### 1、原生js和jQuery获取select选中的值
```html
<select id="textSelect" name="">
    <option value="01" url="http://www.baidu.com">百度</option>
    <option value="02" url="http://www.qq.com">QQ</option>
    <option value="03" url="https://pvp.qq.com/">王者荣耀</option>
</select>
```

##### 原生js
```js
// 获取select对象
var mySelect = document.getElementById('textSelect');
mySelect.addEventListener('change', function () {
    // 获取被选中的索引
    var index = mySelect.selectedIndex;
    console.log('被选中的索引为：' + index);
    // 获取被选中的值
    var selectValue = mySelect.options[index].value;
    console.log('被选中的值为：' + selectValue);
    // 获取被选中的text
    var selectText = mySelect.options[index].text;
    console.log('被选中的text为：' + selectText);
    // 获取被选中的项的其他值，比如这里的url
    var selectUrl = mySelect.options[index].getAttribute('url');
    console.log('被选中的url为：' + selectUrl);
    // 检验是否成功获取
    console.log(textSelect);
})
```

##### jQuery
> 确保已引入jquery库
- 方法一：
```js
$(function () {
    $('#textSelect').change(function () {
        //获取选中项
        var mySelect = $("#textSelect option:selected");
        console.log(mySelect);
        // 获取被选中的索引
        var index = mySelect.index();
        console.log('被选中的索引为：' + index);
        //获取被选中的值
        var selectValue = mySelect.val();
        console.log('被选中的值为：' + selectValue);
        // 获取被选中的text
        var selectText = mySelect.text();
        console.log('被选中的text为：' + selectText);
        // 获取被选中的项的其他值，比如这里的url
        var selectUrl = mySelect.attr('url');
        console.log('被选中的url为：' + selectUrl);
        // 检验是否成功获取
        console.log(textSelect);
    })
})
```

- 方法二：
```js
$(function () {
    $('#textSelect').change(function () {
        //获取选中项
        var mySelect = $("#textSelect").find("option:selected");
        console.log(mySelect);
        // 获取被选中的索引
        var index = mySelect.index();
        console.log('被选中的索引为：' + index);
        //获取被选中的值
        var selectValue = mySelect.val();
        console.log('被选中的值为：' + selectValue);
        // 获取被选中的text
        var selectText = mySelect.text();
        console.log('被选中的text为：' + selectText);
        // 获取被选中的项的其他值，比如这里的url
        var selectUrl = mySelect.attr('url');
        console.log('被选中的url为：' + selectUrl);
        // 检验是否成功获取
        console.log(textSelect);
    })
})
```

### 2、箭头函数(Arrow Function)`=>`
> 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的`this`,`arguments`,`super`或`new.target`。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

```js
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) { 
  return element.length; 
}); // 返回数组：[8, 6, 7, 9]

// 相当于箭头函数
elements.map(element => element.length); // 返回数组：[8, 6, 7, 9]
```

更详细的参考：
- [箭头函数 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [箭头函数 | 廖雪峰](https://www.liaoxuefeng.com/wiki/1022910821149312/1031549578462080)
- [JavaScript初学者必看“箭头函数” | Fundebug](https://blog.fundebug.com/2017/05/25/arrow-function-for-beginner/)


### 3、表格双边框合并为单一边框
```css
table{
    border-collapse:collapse;
}
``` 

### 4、删除全部子节点
可以用while循环`node.removeChild(node.firstChild)`,条件为`node.hasChildNodes()`如果存在子节点会返回true，否则false
```js
while (node.hasChildNodes()) {
    // 去掉上次生成的表格，只保留当前的
    node.removeChild(node.firstChild);
}
```

### 5、汉字根据拼音排序
```js
function hansSortByAccent(a, b) {
    return a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'});
}
```

---

### 零碎知识点
- `childNodes`会返回所有节点包括文本节点，`children`则只会返回元素节点(推荐使用)
- localeCompare：返回数字。如果stringObject < target，返回小于0的数。如果stringObject > target，返回大于0的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回0。
