#### 任务目的
学会灵活使用 san 来控制元素的样式

#### 任务描述
```html
<div id="block" style="background:red;width:100px;height:100px;"></div>
<script>
    let block = document.getElementById('block');
    block.addEventListener('click', function () {
        block.style = 'background:blue;width:100px;height:100px;';
    });
</script>
```
- 以上代码实现了点击方块，修改方块的样式的功能。
- 将上述功能改用san来实现。

#### 任务注意事项
- 请仔细预读官方文档。
- 你可以分别使用 class 和 style 两种方式，实现元素样式的控制。
- 禁止使用原生 dom 来修改样式。

#### 参考资料
- [san官方文档 -- 样式](https://baidu.github.io/san/tutorial/style/)