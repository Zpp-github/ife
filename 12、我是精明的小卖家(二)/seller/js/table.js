// 渲染表格
function buildTable(datas) {
    // 按照商品、地区的拼音顺序对data排序
    dataSort(datas);

    // 去掉上次生成的表格，只保留当前的
    while (tableWrapper.hasChildNodes()) {
        tableWrapper.removeChild(tableWrapper.firstChild);
    }

    var newTable = document.createElement("table");
    newTable.setAttribute('id', 'newTable');
    var newThead = document.createElement("thead");
    var Tr = document.createElement('tr');

    // 表头，显示数据标题
    // 商品种类
    var newproTh = document.createElement('th');
    newproTh.innerHTML = thName[0];
    // 地区
    var newregTh = document.createElement('th');
    newregTh.innerHTML = thName[1];
    //判断地区和产品的前后顺序
    if (saleFlag == 2) {// 地区：商品 = 1：多 或 地区：商品 = 0：多(包括1)，地区作为第一列，商品作为第二列
        Tr.appendChild(newregTh);
        Tr.appendChild(newproTh);
    } else {// 地区：商品 = 多：1 或 地区：商品 = 多(包括1)：0 或 地区：商品 = 多：多 或 地区：商品 = 1：1，以商品为第一列，地区为第二列
        Tr.appendChild(newproTh);
        Tr.appendChild(newregTh);
    }

    // 月份
    for (let i = 2; i < thName.length; i++) {
        var newTh = document.createElement('th');
        newTh.innerHTML = thName[i];
        Tr.appendChild(newTh);
    }
    newTable.appendChild(newThead);
    newThead.appendChild(Tr);
    newTable.appendChild(buildTbody(datas));
    tableWrapper.appendChild(newTable);

    // 合并相同的单元格
    mergeCell('newTable', 0, 0, 0);
    // 返回新生成的表格
    return newTable;
}

// 表格主体
function buildTbody(datas) {
    var tbody = document.createElement("tbody");

    // 根据表单选项遍历对应数据
    for (let i = 0; i < datas.length; i++) {
        var newTr = document.createElement('tr');
        for (let j = 0; j < 14; j++) {
            var newTd = document.createElement('td');
            if (j == 0) {// 第一行
                if (saleFlag == 2) {
                    newTd.innerHTML = datas[i]['region'];
                    newTd.setAttribute('class', 'right');
                } else {
                    newTd.innerHTML = datas[i]['product'];
                    newTd.setAttribute('class', 'right');
                }
            } else if (j == 1) {// 第二行
                if (saleFlag == 2) {
                    newTd.innerHTML = datas[i]['product'];
                } else {
                    newTd.innerHTML = datas[i]['region'];
                }
            } else {
                newTd.innerHTML = datas[i]['sale'][j - 2];
            }
            newTr.appendChild(newTd);
        }
        tbody.appendChild(newTr);
    }
    return tbody;
}