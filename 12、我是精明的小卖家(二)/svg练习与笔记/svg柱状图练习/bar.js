// 柱状图练习

var histogram = document.getElementById('histogram');
var svgBox = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgBox.setAttribute('width', '950');
svgBox.setAttribute('height', '700');
svgBox.setAttribute('style', 'border:1px solid #000');
svgBox.setAttribute('id', 'main');
histogram.appendChild(svgBox);

var defsBox = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
defsBox.setAttribute('id', 'colorPillar');
svgBox.appendChild(defsBox);

var gBoxAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g');
gBoxAxis.setAttribute('stroke', '#555');
gBoxAxis.setAttribute('stroke-width', '2')
svgBox.appendChild(gBoxAxis);

// 绘制x轴
var xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
xAxis.setAttribute('x1', '50');
xAxis.setAttribute('y1', '600');
xAxis.setAttribute('x2', '900');
xAxis.setAttribute('y2', '600');
var xArrow1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
xArrow1.setAttribute('x1', '880');
xArrow1.setAttribute('y1', '590');
xArrow1.setAttribute('x2', '900');
xArrow1.setAttribute('y2', '600');
var xArrow2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
xArrow2.setAttribute('x1', '880');
xArrow2.setAttribute('y1', '610');
xArrow2.setAttribute('x2', '900');
xArrow2.setAttribute('y2', '600');
gBoxAxis.appendChild(xAxis);
gBoxAxis.appendChild(xArrow1);
gBoxAxis.appendChild(xArrow2);
// 绘制Y轴
var yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
yAxis.setAttribute('x1', '50');
yAxis.setAttribute('y1', '600');
yAxis.setAttribute('x2', '50');
yAxis.setAttribute('y2', '5');
var yArrow1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
yArrow1.setAttribute('x1', '40');
yArrow1.setAttribute('y1', '25');
yArrow1.setAttribute('x2', '50');
yArrow1.setAttribute('y2', '5');
var yArrow2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
yArrow2.setAttribute('x1', '60');
yArrow2.setAttribute('y1', '25');
yArrow2.setAttribute('x2', '50');
yArrow2.setAttribute('y2', '5');
gBoxAxis.appendChild(yAxis);
gBoxAxis.appendChild(yArrow1);
gBoxAxis.appendChild(yArrow2);

var gText = document.createElementNS('http://www.w3.org/2000/svg', 'g');
gText.setAttribute('font-size', '20px');
svgBox.appendChild(gText);
// x轴标题
var xText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
xText.setAttribute('x', '860');
xText.setAttribute('y', '625');
xText.innerHTML = 'month';
gText.appendChild(xText);
// y轴标题
var yText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
yText.setAttribute('x', '3');
yText.setAttribute('y', '21');
yText.innerHTML = 'sale';
gText.appendChild(yText);
// 柱状图标题
var histogramTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
histogramTitle.setAttribute('x', '350');
histogramTitle.setAttribute('y', '660');
histogramTitle.setAttribute('font-size', '20');
histogramTitle.setAttribute('fill', 'gray');
histogramTitle.innerHTML = '华东地区手机12个月的销售数据';
gText.appendChild(histogramTitle);

for (let i = 0; i < sourceData.length; i++) {
    if (sourceData[i].region == '华东' && sourceData[i].product == '手机') {
        // 每个柱子的宽
        let colWidth = 800 / (2 * sourceData[i].sale.length + 1);

        for (let j = 0; j < sourceData[i].sale.length; j++) {
            // 每个柱子的高
            let colHeight = sourceData[i].sale[j] * 2;
            let x = (2 * j + 1) * colWidth + 50;
            let y = 600 - colHeight;
            // 动态添加渐变对象
            var color = rc(); //渐变颜色

            colorPillar.innerHTML += `
            <linearGradient id="g${j}" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0" stop-color="${color}"></stop>
              <stop offset="100%" stop-color="${color}" stop-opacity="0"></stop>
            </linearGradient>`;

            //动态创建矩形
            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', colWidth);
            rect.setAttribute('height', colHeight);
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('fill', `url(#g${j})`);
            main.appendChild(rect);

            // 设置x轴刻度
            let xText1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            xText1.setAttribute('x', (2 * j + 1) * colWidth + 55);
            xText1.setAttribute('y', 625);
            xText1.innerHTML = j + 1 + '月';
            main.appendChild(xText1);

            // 动态添加数据具体项的值
            let val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            val.setAttribute('x', x + 3);
            val.setAttribute('y', y - 5);
            val.setAttribute('fill', `url(#g${j})`);
            val.innerHTML = sourceData[i].sale[j];
            main.appendChild(val);
        }
        // 设置y轴刻度
        let y = 600;
        let sale = 0;
        for (let k = 0; k < 14; k++) {
            y -= 40;
            sale += 20;
            let yLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            let yText1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            yLine.setAttribute('x1', '50');
            yLine.setAttribute('y1', y);
            yLine.setAttribute('x2', '55');
            yLine.setAttribute('y2', y);
            yLine.setAttribute('stroke', "#000");
            yText1.setAttribute('x', '18');
            yText1.setAttribute('y', y);
            yText1.innerHTML = sale;
            main.appendChild(yLine);
            main.appendChild(yText1);
        }

        // 随机颜色
        function rc() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            console.log(r);
            console.log(g);
            console.log(b);
            return `rgb(${r},${g},${b})`
        }
    }
}
