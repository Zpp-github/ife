#### 任务目的
- 理解san的运行机制
- 综合运用html + css + san开发一款单页面应用

#### 任务描述
- 商品详情页[DEMO](https://h5.ele.me/shop/#geohash=wx4g12h5pnvq&amp;id=429172&amp;s_type=0&amp;rank_id=174a58549fef455598b653851f146194)
- 完成demo页面当中的点餐页面，包括商品列表，评论列表，商家详情三个子页面

#### 任务注意事项
- 使用s-transition在子页面切换，点击菜品等交互中优化体验
- 实现无线滚动加载列表以及下拉刷新和上滑刷新功能
- 构造多种用例探究san对于列表渲染的优化机制，同时与vue在渲染列表时的key机制做对比。
- 页面切换的效果可以使用san-router，也可以使用san提供的动态子组件的功能
- 考虑页面对于多种尺寸手机的兼容
- 适当添加缓存，提高整体项目的体验
- 使用CSS预处理器和后处理器增加css代码的可维护性

#### 在线参考资料
- [San transition](https://baidu.github.io/san/tutorial/transition/)
- [San动态子组件](https://baidu.github.io/san/tutorial/component/#%E5%8A%A8%E6%80%81%E5%AD%90%E7%BB%84%E4%BB%B6)
- [再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)