// 折线图练习

var lineChart = document.getElementById('lineChart');
var canvasBox = document.createElement('canvas');
canvasBox.setAttribute('id', 'main');
canvasBox.setAttribute('width', '950');
canvasBox.setAttribute('height', '700');
canvasBox.setAttribute('style', 'border:1px solid #000');
lineChart.appendChild(canvasBox);

if (main.getContext) {
    // 绘制x轴
    var xAxis = main.getContext('2d');
    xAxis.beginPath();
    xAxis.moveTo(50, 600);
    xAxis.lineTo(900, 600);
    xAxis.lineTo(880, 590);
    xAxis.moveTo(900, 600);
    xAxis.lineTo(880, 610);
    xAxis.stroke();

    // 绘制y轴
    var yAxis = main.getContext('2d');
    yAxis.beginPath();
    yAxis.moveTo(50, 600);
    yAxis.lineTo(50, 5);
    yAxis.lineTo(40, 25);
    yAxis.moveTo(50, 5);
    yAxis.lineTo(60, 25);
    yAxis.stroke();

    // x轴标题
    var xText = main.getContext('2d');
    xText.font = '20px Microsoft YaHei';
    xText.fillStyle = '#000';
    xText.fillText('month', 860, 625);

    // y轴标题
    var yText = main.getContext('2d');
    yText.font = '20px Microsoft YaHei';
    yText.fillStyle = '#000';
    yText.fillText('sale', 3, 21);

    // 折线图标题
    var lineChartTitle = main.getContext('2d');
    lineChartTitle.font = '20px Microsoft YaHei';
    lineChartTitle.fillStyle = 'gray';
    lineChartTitle.fillText('华东地区手机12个月的销售数据', 350, 670);

    for (let i = 0; i < sourceData.length; i++) {
        if (sourceData[i].region == '华东' && sourceData[i].product == '手机') {
            // 每个点的宽
            let colWidth = 800 / (2 * sourceData[i].sale.length + 1);

            for (let j = 0; j < sourceData[i].sale.length; j++) {
                // 每个点的高
                let colHeight = sourceData[i].sale[j] * 2;
                let x = (2 * j + 1) * colWidth + 70;
                let y = 600 - colHeight;
                let x1 = (2 * j + 3) * colWidth + 70;
                let y1 = 600 - sourceData[i].sale[j + 1] * 2;

                //动态创建折线
                let line = main.getContext('2d');
                line.beginPath();
                line.moveTo(x, y);
                line.lineTo(x1, y1);
                line.stroke();
                let circle = new Path2D();
                circle.arc(x, y, 3.5, 0, Math.PI * 2, true);
                line.fill(circle);

                // 设置x轴刻度
                let text = main.getContext('2d');
                text.font = '16px Microsoft YaHei';
                text.fillStyle = '#000';
                text.fillText(j + 1 + '月', (2 * j + 1) * colWidth + 55, 625);

                // 动态添加数据具体项的值
                let val = main.getContext('2d');
                val.font = '16px Microsoft YaHei';
                val.fillText(sourceData[i].sale[j], x - 12, y - 15);
            }

            // 设置y轴刻度
            let y = 600;
            let sale = 0;
            for (let k = 0; k < 14; k++) {
                y -= 40;
                sale += 20;
                let yLine = main.getContext('2d');
                yLine.beginPath();
                yLine.moveTo(50, y);
                yLine.lineTo(55, y);
                yLine.stroke();
                let yText1 = main.getContext('2d');
                yText1.font = '16px Microsoft YaHei';
                yText1.fillStyle = '#000';
                yText1.fillText(sale, 18, y);
            }
        }
    }
} else {
    var lineText = main.getContext('2d');
    lineText.font = "36px serif";
    lineText.fillStyle = 'gray';
    lineText.fillText('！浏览器不支持canvas，不能显示折线图', 160, 300);
}