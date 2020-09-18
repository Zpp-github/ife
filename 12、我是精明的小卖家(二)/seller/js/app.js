// 页面入口主流程的代码，比如一些初始化的工作，放到一个叫做app.js的文件中

var regionRadio = document.getElementById('region-radio-wrapper');
var productRadio = document.getElementById('product-radio-wrapper')
var tableWrapper = document.getElementById("table-wrapper");
var thName = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var regionData = new Array; // 存放地区
var productData = new Array;  // 存放产品
var order = 0; // 商品与地区顺序
var saleData = new Array; // 存放根据用户的选择匹配到的数据

checkBox(regionRadio, ["华东", "华南", "华北"]);
checkBox(productRadio, ["手机", "笔记本", "智能音箱"]);