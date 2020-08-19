// 针对三种情况(可多次筛选，无限制)
// 1、只筛选了地区表单，商品种类处于“未选择”状态
// 生成的表格时符合所选地区的所有数据
// 2、只筛选了商品种类表单，地区处于“未选择”状态
// 生成的表格是符合所选商品种类的所有数据
// 3、筛选了地区表单和商品种类表单
// 生成的表格是同时符合所选地区和商品种类的所有数据

var regionSelect = document.getElementById("region-select");
var productSelect = document.getElementById("product-select");
var tableWrapper = document.getElementById("table-wrapper");
var thName = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var actions = [];

// 用户选择地区
regionSelect.addEventListener('change', function () {
    getAction();
    // 初始化
    tableWrapper.innerHTML = "";
    // 将创建的表格加入到 table-wrapper 中
    tableWrapper.appendChild(buildTable(getSelectData()));
})

// 用户选择商品种类
productSelect.addEventListener('change', function () {
    getAction();
    // 初始化
    tableWrapper.innerHTML = "";
    // 将创建的表格加入到 table-wrapper 中
    tableWrapper.appendChild(buildTable(getSelectData()));
})

// 每次用户进行表单选择时都查看当前所有表单的value值，并存进actions数组
function getAction() {
    // 数组初始化
    actions = [];
    // 获取当前所有表单元素
    var selects = document.querySelectorAll("select");
    // 表单值存进数组
    for (i = 0; i < selects.length; i++) {
        actions.push(selects[i].value);
        console.log(selects[i].value);
    }
}

// 根据用户选择的表单，从完整数据中，把对应选择的数据取出来
function getSelectData() {
    var data;
    // 拿到选中项的索引
    var regionIndex = regionSelect.selectedIndex;
    var productIndex = productSelect.selectedIndex;
    // 拿到选中项options的value
    var regionValue = regionSelect.options[regionIndex].value;
    var productValue = productSelect.options[productIndex].value;
    if (actions[0] === "--请选择--" || actions[0] === undefined) {// 商品种类
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
        data = sourceData.filter(ele => ele.product == productValue);
    } else if (actions[1] === "--请选择--" || actions[1] === undefined) {// 地区
        data = sourceData.filter(ele => ele.region == regionValue);
    } else {// 商品种类和地区
        data = sourceData.filter(ele => ele.region == regionValue && ele.product == productValue);
    }
    // 返回数据
    return data;
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
    return tbody;
}