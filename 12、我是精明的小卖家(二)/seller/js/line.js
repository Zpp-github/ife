// 折线图
function createLine(data, flag, colors) {
    var lineChart = document.getElementById('chart-using-canvas');
    // 如果存在折线图，先移除再创建新的
    if (lineChart.firstChild) {
        lineChart.removeChild(lineChart.firstChild);
    }
    var canvasBox = document.createElement('canvas');
    canvasBox.setAttribute('id', 'lineCanvas');
    canvasBox.setAttribute('width', '891');
    canvasBox.setAttribute('height', '456');
    lineChart.appendChild(canvasBox);

    if (lineCanvas.getContext) {
        // 绘制x轴
        var xAxis = lineCanvas.getContext('2d');
        xAxis.beginPath();
        xAxis.moveTo(50, 400);
        xAxis.lineTo(855, 400);
        xAxis.lineTo(835, 390);
        xAxis.moveTo(855, 400);
        xAxis.lineTo(835, 410);
        xAxis.stroke();

        // 绘制y轴
        var yAxis = lineCanvas.getContext('2d');
        yAxis.beginPath();
        yAxis.moveTo(50, 400);
        yAxis.lineTo(50, 5);
        yAxis.lineTo(40, 25);
        yAxis.moveTo(50, 5);
        yAxis.lineTo(60, 25);
        yAxis.stroke();

        // x轴标题
        var xText = lineCanvas.getContext('2d');
        xText.font = '20px Microsoft YaHei';
        xText.fillStyle = '#aaa';
        xText.fillText('month', 827, 423);

        // y轴标题
        var yText = lineCanvas.getContext('2d');
        yText.font = '20px Microsoft YaHei';
        yText.fillStyle = '#aaa';
        yText.fillText('sale', 3, 21);

        // 折线图标题
        var lineChartTitle = lineCanvas.getContext('2d');
        lineChartTitle.font = '20px Microsoft YaHei';
        lineChartTitle.fillStyle = 'gray';
        lineChartTitle.fillText('12个月的销售数据', 350, 453);

        if (flag === 0) {
            // 实时折线图
            createSingleLine(data, lineCanvas);
        } else {
            // 所有的折线图
            createBothLine(data, lineCanvas, colors);
        }

        // 设置y轴刻度
        createYTextLine(lineCanvas);
    } else {
        var lineText = lineCanvas.getContext('2d');
        lineText.font = "36px serif";
        lineText.fillStyle = 'gray';
        lineText.fillText('！浏览器不支持canvas，不能显示折线图', 160, 300);
    }
}



// 创建实时折线图
function createSingleLine(data, lineCanvas) {
    // 每个点的宽
    let colWidth = parseInt(800 / (2 * data.length + 1));
    for (let i = 0; i < data.length; i++) {
        // 每个点的高
        let colHeight = data[i] / 2;
        let x = (2 * i + 1) * colWidth + 70;
        let y = 400 - colHeight;
        let x1 = (2 * i + 3) * colWidth + 70;
        let y1 = 400 - data[i + 1] / 2;

        // 动态创建折线
        let line = lineCanvas.getContext('2d');
        line.beginPath();
        line.moveTo(x, y);
        line.lineTo(x1, y1);
        // 折线颜色
        line.strokeStyle = 'skyblue';
        line.stroke();
        let circle = new Path2D();
        circle.arc(x, y, 3.5, 0, Math.PI * 2, true);
        // 折线点颜色
        line.fillStyle = 'blue';
        line.fill(circle);

        // 动态添加数据具体项的值
        let val = lineCanvas.getContext('2d');
        val.font = '16px Microsoft YaHei';
        val.fillStyle = '#aaa';
        val.fillText(data[i], x - 12, y - 15);

        // 设置x轴刻度
        createXTextLine(i, colWidth, lineCanvas)
    }
}



// 创建所有的折线图
function createBothLine(data, lineCanvas, colors) {
    // 每个点的宽
    let colWidth = parseInt(800 / (2 * data[0].length + 1));
    for (let i = 0; i < data.length; i++) {// data.length条线
        for (let j = 0; j < data[i].length; j++) {// 每条线
            // 每个点的高
            let colHeight = data[i][j] / 2;
            let x = (2 * j + 1) * colWidth + 70;
            let y = 400 - colHeight;
            let x1 = (2 * j + 3) * colWidth + 70;
            let y1 = 400 - data[i][j + 1] / 2;

            // 动态创建折线
            let line = lineCanvas.getContext('2d');
            line.beginPath();
            line.moveTo(x, y);
            line.lineTo(x1, y1);
            // 折线颜色
            line.strokeStyle = colors[i];
            line.stroke();
            let circle = new Path2D();
            circle.arc(x, y, 3.5, 0, Math.PI * 2, true);
            // 折线点颜色
            line.fillStyle = colors[i];
            line.fill(circle);

            // 设置x轴刻度
            createXTextLine(j, colWidth, lineCanvas)
        }
    }
}



// 设置x轴刻度
function createXTextLine(num, colWidth, lineCanvas) {
    let text = lineCanvas.getContext('2d');
    text.font = '16px Microsoft YaHei';
    text.fillStyle = '#aaa';
    text.fillText(num + 1 + '月', (2 * num + 1) * colWidth + 55, 420);
}

// 设置y轴刻度
function createYTextLine(lineCanvas) {
    let y = 400;
    let sale = 0;
    for (let k = 0; k < 14; k++) {
        y -= 25;
        sale += 50;
        let yLine = lineCanvas.getContext('2d');
        yLine.beginPath();
        yLine.moveTo(50, y);
        yLine.lineTo(55, y);
        yLine.strokeStyle = '#000';
        yLine.stroke();
        let yText1 = lineCanvas.getContext('2d');
        yText1.font = '16px Microsoft YaHei';
        yText1.fillStyle = '#aaa';
        yText1.fillText(sale, 18, y);
    }
}