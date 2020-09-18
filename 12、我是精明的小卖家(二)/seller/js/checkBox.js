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