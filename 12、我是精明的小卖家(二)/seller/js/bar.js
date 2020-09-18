// 柱状图
function createRect(data, flag, colors) {
    var histogram = document.getElementById('chart-using-svg');
    // 如果存在柱形图，先移除再创建新的
    if (histogram.firstChild) {
        histogram.removeChild(histogram.firstChild);
    }
    var svgBox = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgBox.setAttribute('width', '891');
    svgBox.setAttribute('height', '456');
    svgBox.setAttribute('id', 'main');
    histogram.appendChild(svgBox);

    // var defsBox = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    // defsBox.setAttribute('id', 'colorPillar');
    // svgBox.appendChild(defsBox);

    var gBoxAxis = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gBoxAxis.setAttribute('stroke', '#555');
    gBoxAxis.setAttribute('stroke-width', '2')
    svgBox.appendChild(gBoxAxis);

    // 绘制x轴
    var xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttribute('x1', '50');
    xAxis.setAttribute('y1', '400');
    xAxis.setAttribute('x2', '855');
    xAxis.setAttribute('y2', '400');
    var xArrow1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xArrow1.setAttribute('x1', '835');
    xArrow1.setAttribute('y1', '390');
    xArrow1.setAttribute('x2', '855');
    xArrow1.setAttribute('y2', '400');
    var xArrow2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xArrow2.setAttribute('x1', '835');
    xArrow2.setAttribute('y1', '410');
    xArrow2.setAttribute('x2', '855');
    xArrow2.setAttribute('y2', '400');
    gBoxAxis.appendChild(xAxis);
    gBoxAxis.appendChild(xArrow1);
    gBoxAxis.appendChild(xArrow2);
    // 绘制Y轴
    var yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttribute('x1', '50');
    yAxis.setAttribute('y1', '400');
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
    gText.setAttribute('fill', '#aaa');
    svgBox.appendChild(gText);
    // x轴标题
    var xText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xText.setAttribute('x', '827');
    xText.setAttribute('y', '423');
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
    histogramTitle.setAttribute('y', '453');
    histogramTitle.setAttribute('font-size', '20');
    histogramTitle.setAttribute('fill', 'gray');
    histogramTitle.innerHTML = '12个月的销售数据';
    gText.appendChild(histogramTitle);

    if (flag === 0) {
        // 实时柱形图
        createSingleHisto(data);
    } else {
        // 所有的柱形图
        createBothHisto(data, colors);
    }

    // 设置y轴刻度
    createYText();

    // 随机颜色
    // function rc() {
    //     let r = Math.floor(Math.random() * 256);
    //     let g = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     return `rgb(${r},${g},${b})`
    // }
}

// 创建实时柱形图
function createSingleHisto(data) {
    // 每个柱子的宽
    let colWidth = parseInt(800 / (2 * data.length + 1));
    for (let i = 0; i < data.length; i++) {
        // 每个柱子的高
        let colHeight = data[i] / 2;
        let x = (2 * i + 1) * colWidth + 50;
        let y = 400 - colHeight;
        // 动态添加渐变对象
        // var color = rc(); //渐变颜色

        // colorPillar.innerHTML += `
        // <linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="100%">
        //   <stop offset="0" stop-color="${color}"></stop>
        //   <stop offset="100%" stop-color="${color}" stop-opacity="0"></stop>
        // </linearGradient>`;

        //动态创建矩形
        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', colWidth);
        rect.setAttribute('height', colHeight);
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('fill', `skyblue`);
        main.appendChild(rect);

        // 设置x轴刻度
        createXText(i, colWidth);

        // 动态添加数据具体项的值
        let val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        val.setAttribute('x', x + 4);
        val.setAttribute('y', y - 7);
        val.setAttribute('fill', `#aaa`);
        val.innerHTML = data[i];
        main.appendChild(val);
    }
}

// 创建所有的柱形图
// 每列即每个月的销售数据为一组，根据行循环
function createBothHisto(data, colors) {
    for (let j = 0; j < data[0].length; j++) {
        // 每组柱子的宽
        let ArrWidth = parseInt(800 / (2 * data[0].length + 1));
        // 每组柱子的x坐标
        let x = (2 * j + 1) * ArrWidth + 50;
        for (let k = 0; k < data.length; k++) {
            // 每个柱子的宽
            let colWidth = ArrWidth / data.length;
            // 每个柱子的高
            let colHeight = data[k][j] / 2;
            // 每个柱子的x坐标
            if (k != 0) {
                x = x + colWidth;
            }
            // 每个柱子的y坐标
            let y = 400 - colHeight;

            // 动态添加渐变对象
            // var color = rc(); //渐变颜色

            // colorPillar.innerHTML += `
            // <linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="100%">
            //   <stop offset="0" stop-color="${color}"></stop>
            //   <stop offset="100%" stop-color="${color}" stop-opacity="0"></stop>
            // </linearGradient>`;

            //动态创建矩形
            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', colWidth);
            rect.setAttribute('height', colHeight);
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('fill', colors[k]);
            main.appendChild(rect);
        }
        // 设置x轴刻度
        createXText(j, ArrWidth);
    }
}


// 设置x轴刻度
function createXText(num, colWidth) {
    let xText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    xText.setAttribute('x', (2 * num + 1) * colWidth + 52);
    xText.setAttribute('y', 420);
    xText.setAttribute('fill', '#aaa');
    xText.innerHTML = num + 1 + '月';
    main.appendChild(xText);
}

// 设置y轴刻度
function createYText() {
    let y = 400;
    let sale = 0;
    for (let k = 0; k < 14; k++) {
        y -= 25;
        sale += 50;
        let yText1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        let yLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        yLine.setAttribute('x1', '50');
        yLine.setAttribute('y1', y);
        yLine.setAttribute('x2', '55');
        yLine.setAttribute('y2', y);
        yLine.setAttribute('stroke', "#000");
        yText1.setAttribute('x', '18');
        yText1.setAttribute('y', y);
        yText1.setAttribute('fill', '#aaa');
        yText1.innerHTML = sale;
        main.appendChild(yLine);
        main.appendChild(yText1);
    }
}