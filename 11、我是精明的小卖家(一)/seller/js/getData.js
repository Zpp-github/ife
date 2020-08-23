// 根据用户选择的表单，从完整数据中，把对应选择的数据取出来
function getSelectData() {
    saleData = [];
    regionData = []; //地区
    productData = []; //商品
    order = 0; // 商品与地区顺序

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
        order = 0;
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
        order = 0;
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

    // 地区：商品 = 1：1，以商品为第一列，地区为第二列
    if (productData.length == 1 && regionData.length == 1) {
        saleFlag = 0;
    }

    // 地区：商品 = 多：1 或 地区：商品 = 多(包括1)：0 或 地区：商品 = 多：多，以商品为第一列，地区为第二列，并且把商品列对同样的商品单元格进行合并
    if ((productData.length == 1 && regionData.length > 1) || (productData.length >= 1 && regionData.length == 0) || (productData.length > 1 && regionData.length > 1)) {
        saleFlag = 1;
    }

    // 地区：商品 = 1：多 或 地区：商品 = 0：多(包括1)，地区作为第一列，商品作为第二列，并且把地区列对同样的地区单元格进行合并
    if ((productData.length > 1 && regionData.length == 1) || (productData.length == 0 && regionData.length >= 1)) {
        saleFlag = 2;
    }

    // 返回数据
    return saleData;
}