// 汉字根据拼音排序
function hansSortByAccent(a, b) {
    // localeCompare:返回数字。如果stringObject<target，返回小于0的数。如果stringObject>target，返回大于0的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回0。
    return a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' });
}

// 按照商品、地区的拼音顺序对data排序
function dataSort(datas) {
    datas = datas.sort(function (a, b) {
        var t;
        t = hansSortByAccent(a.product, b.product);
        if (!t) {
            return hansSortByAccent(a.region, b.region);
        }
        return t;
    });
}