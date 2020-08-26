### 目录
- 基本用法
  - 替换内容
  - `</canvas>`标签不可省
  - 渲染上下文
  - canvas实例
- 绘制图形
  - `fillRect()`矩形
  - 绘制路径
    - `moveTo()`移动笔触和`lineTo()`线
    - 圆弧
- 添加样式和颜色
- 绘制文本

### canvas
> 用于绘制图像（通过脚本，通常是 JavaScript），例如它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画

> `<canvas>`元素本身并没有绘制能力（它仅仅是图形的容器） - 所有必须使用脚本来完成实际的绘图任务。
> `getContext()`方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性，`getContext()`只有一个参数，上下文的格式
> 以及更早的版本不支持`<canvas>`元素

> Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）。但是，可以使用HTML的高度和宽度属性来自定义 Canvas 的尺寸。为了在 Canvas 上绘制图形，我们使用一个JavaScript上下文对象，它能动态创建图像（ creates graphics on the fly）。

#### 基本用法
##### 替换内容
在`<canvas>`标签中提供替换内容。不支持`<canvas>`的浏览器将会忽略容器并在其中渲染后备内容。而支持`<canvas>`的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

##### `</canvas>`标签不可省
与`<img>`元素不同，`<canvas>`元素需要结束标签(`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。
<br/>

如果不需要替代内容，一个简单的`<canvas id="foo" ...></canvas>`在所有支持canvas的浏览器中都是完全兼容的。

##### 渲染上下文
`<canvas>`元素有一个叫做`getContext()`的方法，这个方法是用来获得渲染上下文和它的绘画功能。`getContext()`只有一个参数，上下文的格式

##### canvas实例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="tutorial" width="150" height="150"></canvas>
    <script>
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            // drawing code here
        } else {
            // canvas-unsupported code here
        }
    </script>
</body>
</html>
```
- 如果绘制出来的图像是扭曲的, 尝试用width和height属性为`<canvas>`明确规定宽高，而不是使用CSS
- 在`<canvas>`标签中提供替换内容。不支持`<canvas>`的浏览器将会忽略容器并在其中渲染后备内容。而支持`<canvas>`的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas

#### 绘制图形
##### `fillRect()`矩形
```html
<!DOCTYPE html>
<body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script>
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 55, 50);
        }
    </script>
</body>
</html>
```
- `fillRect()`绘制“被填充”的矩形，默认的填充颜色是黑色
  - 语法：`context.fillRect(x,y,width,height);`
- fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式，默认值为#000000

```html
<!DOCTYPE html>
<body>
    <canvas id="rectangular" width="150" height="150"></canvas>
    <script>
        // fillRect()函数绘制了一个边长为100px的黑色正方形
        // clearRect()函数从正方形的中心开始擦除了一个60*60px的正方形
        // 接着strokeRect()在清除区域内生成一个50*50的正方形边框
        var rectangular = document.getElementById('rectangular');
        if (rectangular.getContext) {
            var ctx5 = rectangular.getContext('2d');
            ctx5.fillRect(25, 25, 100, 100);
            ctx5.clearRect(45, 45, 60, 60);
            ctx5.strokeRect(50, 50, 50, 50);
        }
    </script>
</body>
</html>
```
- `strokeRect(x, y, width, height)`，绘制一个矩形的边框
- `clearRect(x, y, width, height)`，清除指定矩形区域，让清除部分完全透明
- x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸

```html
<!DOCTYPE html>
<body>
    <canvas id="topToBottom" width="150" height="150"></canvas>
    <script>
        // 从上到下的渐变
        var topToBottom = document.getElementById("topToBottom");
        var ctx2 = topToBottom.getContext("2d");
        var my_gradient = ctx2.createLinearGradient(0, 0, 0, 170);
        my_gradient.addColorStop(0, "black");
        my_gradient.addColorStop(1, "white");
        ctx2.fillStyle = my_gradient;
        ctx2.fillRect(20, 20, 120, 100);
    </script>
</body>
</html>
```
- `createLinearGradient()`创建线性渐变（用在画布内容上）
  - 语法：`context.createLinearGradient(x0,y0,x1,y1);`
- `addColorStop()`规定渐变对象中的颜色和停止位置
  - 语法：`gradient.addColorStop(stop,color);`
  - stop：介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
  - color：在结束位置显示的 CSS 颜色值

##### 绘制路径
###### 思路
- 首先，需要创建路径起始点
- 然后使用画图命令去画出路径
- 之后你把路径封闭
- 一旦路径生成，就能通过描边或填充路径区域来渲染图形

###### `moveTo()`移动笔触和`lineTo()`线
```html
<!DOCTYPE html>
<body>
    <!-- 绘制三角形 -->
    <canvas id="delta" width="150" height="150"></canvas>
    <script>
        // 绘制三角形
        var delta = document.getElementById('delta');
        if (delta.getContext) {
            var ctx6 = delta.getContext('2d');
            ctx6.beginPath();
            ctx6.moveTo(75, 50);
            ctx6.lineTo(100, 75);
            ctx6.lineTo(100, 25);
            ctx6.fill();
        }
    </script>
</body>
</html>
```
- `beginPath()`，新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
- `moveTo(x, y)`，将笔触移动到指定的坐标x以及y上，移除moveTo后可以看到连续的线
- `lineTo(x, y)`，绘制一条从当前位置到指定x以及y位置的直线
- `closePath()`，闭合路径之后图形绘制命令又重新指向到上下文中，不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
- `stroke()`，通过线条来绘制图形轮廓，即描边/轮廓
- `fill()`，通过填充路径的内容区域生成实心的图形。调用`fill()`函数时，所有没有闭合的形状都会自动闭合，所以不需要调用`closePath()`函数。但是调用`stroke()`时不会自动闭合。

###### 圆弧
```html
<!DOCTYPE html>
<body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script>
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    </script>
</body>
</html>
```
- `arc(x, y, radius, startAngle, endAngle, anticlockwise)`，画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成
  - x,y为绘制圆弧所在圆上的圆心坐标
  - radius为半径
  - startAngle以及endAngle参数用弧度定义了开始以及结束的弧度
    - 注意单位是弧度，不是角度。角度与弧度的js表达式:弧度=(Math.PI/180)*角度
  - 都是以x轴为基准
  - 参数anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
- `arcTo(x1, y1, x2, y2, radius)`，根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点

#### 添加样式和颜色
##### 色彩 Colors

#### 绘制文本
```html
<!DOCTYPE html>
<body>
    <canvas id="canvas"></canvas>
    <script>
        var ctx = document.getElementById('canvas').getContext('2d');
        ctx.font = "48px serif";
        ctx.fillText('填充文本', 10, 50);
        ctx.strokeText('文本边框', 10, 100);
    </script>
</body>
</html>
```
- `fillText(text, x, y [, maxWidth])`,在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
- `strokeText(text, x, y [, maxWidth])`,在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.