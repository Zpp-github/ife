// 数据维度有：地区、商品种类、月
// 地区选项应该包括华东、华南、华北三个地区
// 根据用户选择的地区表单来筛选，从完整数据中，把对应选择地区的所有数据取出来
// 生成表格

var regionSelect = document.getElementById("region-select");
var tableWrapper = document.getElementById("table-wrapper");
var thName = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// 用户选择地区
regionSelect.addEventListener('change', function () {
    // 初始化
    tableWrapper.innerHTML = "";
    // 将创建的表格加入到 table-wrapper 中
    tableWrapper.appendChild(buildTable(getSelectData()));
})


// 根据用户选择的地区表单，从完整数据中，把对应选择地区的数据取出来
function getSelectData() {
    // 拿到选中项的索引
    var index = regionSelect.selectedIndex;
    // 拿到选中项options的value
    var optionValue = regionSelect.options[index].value;
    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
    return sourceData.filter(ele => ele.region == optionValue);
}


// 渲染表格
function buildTable(datas) {
    var newTable = document.createElement("table");
    var newThead = document.createElement("thead");
    var Tr = document.createElement('tr');

    // 表头，显示数据标题
    for (var i = 0; i < 14; i++) {
        var newTh = document.createElement('th');
        newTh.innerHTML = thName[i];
        Tr.appendChild(newTh);
    }
    // or
    // thName.forEach(function (el) {
    //     var newTh = document.createElement("th");
    //     newTh.appendChild(document.createTextNode(el));
    //     Tr.appendChild(newTh);
    // });

    newTable.appendChild(newThead);
    newThead.appendChild(Tr);
    newTable.appendChild(buildTbody(datas));
    tableWrapper.appendChild(newTable);
    return newTable;
}

// 表格主体
function buildTbody(datas) {
    var tbody = document.createElement("tbody");

    // 根据表单选项遍历对应数据
    for (var i = 0; i < datas.length; i++) {
        var newTr = document.createElement('tr');
        for (var j = 0; j < 14; j++) {
            var newTd = document.createElement('td');
            if (j == 0) {
                newTd.innerHTML = datas[i]['product'];
            } else if (j == 1) {
                newTd.innerHTML = datas[i]['region'];
            } else {
                newTd.innerHTML = datas[i]['sale'][j - 2];
            }
            newTr.appendChild(newTd);
        }
        tbody.appendChild(newTr);
    }
    // or
    // datas.forEach(function (el) {
    //     var newTr = document.createElement("tr");
    //     for (var i = 0; i < 14; i++) {
    //         var newTd = document.createElement("td");
    //         if (i == 0) {
    //             newTd.appendChild(document.createTextNode(el['product']));
    //         } else if (i == 1) {
    //             newTd.appendChild(document.createTextNode(el['region']));
    //         } else {
    //             newTd.appendChild(document.createTextNode(el['sale'][i - 2]));
    //         }
    //         newTr.appendChild(newTd);
    //     }
    //     tbody.appendChild(newTr);
    // });

    return tbody;
}