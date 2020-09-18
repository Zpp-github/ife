// 鼠标滑动过某一行表格时，获取到对应行的数据的文件,从而创建柱形图和折线图

// 实时柱形图和折线图
tableWrapper.addEventListener('mouseover', function (e) {
    if (e.target.nodeName.toLowerCase() === "td") {
        let cells, // 获取鼠标滑过的某行的每个td
            data = [], // 存每行的具体数据
            flag = 0; // 标识符

        // 拿到响应事件对应的tr，然后依次遍历其中的td，获取其中的数据

        // 鼠标滑过的某行的每个td
        cells = e.target.parentElement.cells;
        // 获取每行的数据并存进数组a里
        for (let i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
        }
        // 将非数字过滤掉，即获取12个月的销售数据
        data = data.filter(function (item) {
            return !isNaN(item);
        });

        // 创建实时柱形图
        createRect(data, flag);

        // 创建实时折线图
        createLine(data, flag);
    }
})

// 所有的柱形图和折线图
tableWrapper.addEventListener('mouseout', function (e) {
    let data = [], // 存每行的数据
        colors,
        flag = 1; // 标识符

    colors = ['#d93a49', '#f47920', '#ffd400', '#45b97c', '#009ad6', '#145b7d', '#6f60aa', '#ef5b9c', '#87843b'];
    let tb = document.querySelector('table');
    for (let i = 1; i < tb.rows.length; i++) {
        let cells;
        cells = Array.prototype.map.call(tb.rows[i].cells, function (item) {
            return item.innerHTML;
        });
        // 将非数字过滤掉，即获取12个月的销售数据
        cells = cells.filter(function (item) {
            return !isNaN(item);
        });
        // 将获取12个月的销售数据存进数组data内
        data.push(cells);
    }

    // 创建所有的柱形图
    createRect(data, flag, colors);

    // 创建所有的折线图
    createLine(data, flag, colors);
})