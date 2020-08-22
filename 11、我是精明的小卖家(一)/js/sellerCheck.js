var regionRadio = document.getElementById('region-radio-wrapper');
var productRadio = document.getElementById('product-radio-wrapper')
var tableWrapper = document.getElementById("table-wrapper");
var thName = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var regionData = new Array; // 存放地区
var productData = new Array;  // 存放产品
var saleData = new Array; // 存放根据用户的选择匹配到的数据

checkBox(regionRadio, ["华东", "华南", "华北"]);
checkBox(productRadio, ["手机", "笔记本", "智能音箱"]);

// 复选框选择操作
function checkBox(radioName, data) {
    let radioBox = createCheckBox(radioName, data);
    let childBox = radioBox.children;
    let flag = 0;
    radioName.addEventListener('change', function (ev) {
        let e = ev || window.event;
        let target = e.target || e.srcElement; // e.target点击了哪个元素，就返回那个元素;this哪个元素绑定了这个点击事件，那么就返回谁
        if (target.getAttribute("type") == "checkbox") {
            let childLength = childBox.length;
            let type = target.getAttribute("checkbox-type");

            // 点击全选
            if (type == 'all') {
                // 点击全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作
                for (let i = 0; i < childLength; i++) {
                    radioBox.children[i].checked = true; // 点击全选时，如果单个选项中所有选项都已经是被选上的状态，则无反应
                    // 所有选项跟随全选按钮，点击全选，所有选项都被选，再次点击全选，所有选项取消选择
                    // radioBox.children[i].checked = target.checked;
                }
                flag = 3;
            }

            // 点击子选项
            if (type == 'child') {
                if (target.checked == true) {
                    flag++;
                }
                if (target.checked == false) {
                    flag--;
                }
                if (flag == 0) {// 不允许一个都不勾选，所以当用户想取消唯一一个被勾选的子选项时，无交互反应，不允许取消勾选
                    target.checked = true;
                    flag = 1;
                }
                if (flag == 3) {// 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
                    radioBox.children[0].checked = true;
                } else {// 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
                    radioBox.children[0].checked = false;
                }
            }
        }
        buildTable(getSelectData());
    })
}

// 生成复选框
function createCheckBox(radioName, data) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox,比如 checkbox-type="all"
    let allBox = document.createElement("input");
    allBox.setAttribute('type', 'checkbox');
    allBox.setAttribute('value', '0');
    allBox.setAttribute('checkbox-type', 'all');
    let allText = document.createTextNode('全选');
    radioName.appendChild(allBox);
    radioName.appendChild(allText);

    //生成各个子选项checkbox的html,给一个自定义属性表示为子选项
    for (let i = 0; i < data.length; i++) {
        let childData = document.createElement('input');
        childData.setAttribute('type', 'checkbox');
        childData.setAttribute('value', data[i]);
        childData.setAttribute('checkbox-type', 'child');
        let childText = document.createTextNode(data[i]);
        radioName.appendChild(childData);
        radioName.appendChild(childText);
    }
    return radioName;
}


// 根据用户选择的表单，从完整数据中，把对应选择的数据取出来
function getSelectData() {
    saleData = [];
    regionData = []; //地区
    productData = []; //商品

    // 获取商品和地区信息
    for (let i = 1; i < regionRadio.children.length; i++) {
        if (regionRadio.children[i].checked) {
            regionData.push(regionRadio.children[i].value);
        }
    }
    for (let i = 1; i < productRadio.children.length; i++) {
        if (productRadio.children[i].checked) {
            productData.push(productRadio.children[i].value)
        }

    }
    // 未选择地区
    if (productData.length > 0 && regionData.length == 0) {
        for (let i in sourceData) {
            for (let p in productData) {
                if (sourceData[i].product == productData[p]) {
                    saleData.push(sourceData[i]);
                }
            }
        }
    }
    // 未选择商品
    if (productData.length == 0 && regionData.length > 0) {
        for (let i in sourceData) {
            for (let r in regionData) {
                if (sourceData[i].region == regionData[r]) {
                    saleData.push(sourceData[i]);
                }
            }
        }
    }
    // 选择了商品和地区
    if (productData.length > 0 && regionData.length > 0) {
        for (let i in sourceData) {
            for (let p in productData) {
                for (let r in regionData) {
                    if (sourceData[i].product == productData[p] && sourceData[i].region == regionData[r]) {
                        saleData.push(sourceData[i]);
                    }
                }
            }
        }
    }
    // 返回数据
    return saleData;
}


// 渲染表格
function buildTable(datas) {
    while (tableWrapper.hasChildNodes()) {
        // 去掉上次生成的表格，只保留当前的
        tableWrapper.removeChild(tableWrapper.firstChild);
    }
    var newTable = document.createElement("table");
    var newThead = document.createElement("thead");
    var Tr = document.createElement('tr');

    // 表头，显示数据标题
    for (let i = 0; i < thName.length; i++) {
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
    for (let i = 0; i < datas.length; i++) {
        var newTr = document.createElement('tr');
        for (let j = 0; j < 14; j++) {
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