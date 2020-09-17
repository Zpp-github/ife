### 课程目标
通过趣味练习，来强化对于 JavaScript 的熟悉
<br/>

持续练习如何对于问题进行抽象，应用面向对象或者各种设计模式进行问题的解决

### 课程描述
#### 创建一个足球场
##### 需求
通过 Canvas 或者 SVG 绘制一片绿色矩形，就像是我们从高空俯视绿色草坪足球场看见的一样。
<br/>

有余力的同学，可以把足球场上的各种边线画上。

- [参考](https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%B6%B3%E7%90%83%E5%9C%BA&step_word=&hs=0&pn=2&spn=0&di=136070&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=331201578%2C3198829255&os=1465624056%2C1991837824&simid=3383497574%2C366669055&adpicid=0&lpn=0&ln=1980&fr=&fmq=1529244168457_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fd.ifengimg.com%2Fw740_q%2Fs0.ifengimg.com%2F2017%2F09%2F17%2F43756b90b41d2e0cb3fdcf79fa248bfa.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bxhyg_z%26e3BgjpAzdH3Ffity5g2AzdH3Fxtgfit-8mdcm0mbc_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=)

##### 设计
应用工厂模式，设计一个生成足球场的类
<br/>

足球场包括长度，宽度的属性，长度宽度创建时候以模拟真实单位的“米”为参数，同时以容器宽度和高度进行对应换算。

##### 验证
在不同像素高宽的容器中生成同样长宽米的球场，看球场是否进行了对应的自适应变换
<br/>

在同样像素高宽的容器中，生成不同长宽米的球场

#### 创建一个足球运动员
##### 需求
通过 Canvas 或者 SVG 或者 DOM 创建一个足球运动员。
<br/>

我们将足球运动员抽象为一个实心圆，不需要考虑他的方向问题。

- [参考](https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%86%A0%E5%86%9B%E8%B6%B3%E7%90%83%E7%BB%8F%E7%90%86&step_word=&hs=0&pn=12&spn=0&di=207025992250&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=4023482802%2C640930609&os=2504155838%2C454844919&simid=0%2C0&adpicid=0&lpn=0&ln=1920&fr=&fmq=1529244507458_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fg.hiphotos.baidu.com%2Fbaike%2Fc0%3Dbaike60%2C5%2C5%2C60%2C20%3Bt%3Dgif%2Fsign%3D6bb7559fd539b60059c307e588395e4f%2F0824ab18972bd4074b8385817b899e510fb30901.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fkwthj_z%26e3Bkwt17_z%26e3Bv54AzdH3FetjoAzdH3Fca8l9_z%26e3Bip4d&gsm=d&rpstart=0&rpnum=0&islist=&querylist=)

创建球员的时候，需要将球员创建到某个球场中，球员圆形的大小默认为2米，按照和球场的大小进行对应像素的换算。
<br/>

球员有很多关于足球运动能力的属性，比如速度，力量，技术，射门等等。我们先添加一个属性，叫做速度。
<br/>

速度 VNum 为一个在1-99范围内的整数，随机生成。对应物理概念可以假设为：
<br/>

速度值为 99 的，最高速度为 12米每秒
<br/>

速度值为 1 的，最高速度为 3米每秒
<br/>

假设速度值和最高速度是线性关系，我们推导出如下公式：
<br/>

最高速度VMax = 3 + (VNum - 1) * ( 9 / 98 )

#### 让球员跑起来
##### 需求
给球员增加一个方法，奔跑，指定一个终止点（相对于球场左上角的米的坐标），球员向那个终止点跑去。
<br/>

使用上一个需求中的球员速度，以及和球场实际大小进行计算，模拟一个球员奔跑中，球员圆圈移动的动画。
<br/>

为了测试方便，再给球员设置一个方法，设定球员所在位置，参数为相对于球场左上角的用米为单位的坐标，需要转换为像素
<br/>

注意：球员不可能一直按着最高速度进行奔跑，球员有起步，加速到全速，到终点后降速的过程

##### 阅读
- [贝塞尔曲线的一些事情](https://www.w3cplus.com/animation/mathematical-intuition-behind-bezier-curves.html)
- [cubic-bezier贝塞尔曲线CSS3动画工具](https://blog.csdn.net/qq_25600055/article/details/51045163)
- [贝塞尔曲线与CSS3动画、SVG和canvas的基情](https://www.zhangxinxu.com/wordpress/2013/08/%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF-cubic-bezier-css3%E5%8A%A8%E7%94%BB-svg-canvas/)
- [JS模拟CSS3动画-贝塞尔曲线](https://www.cnblogs.com/yanan-boke/p/8875571.html)
- [css3动画——常用的贝塞尔曲线](https://www.cnblogs.com/yansi/p/4012038.html)
- [CSS3 三次贝塞尔曲线(cubic-bezier)](https://blog.csdn.net/zhaozjc112/article/details/52909172)

##### 设计
根据上面的阅读，实现球员的奔跑方法，球员有起步，逐渐加速，全速，到达终点后，再逐渐降速并继续向前再移动一小段距离

##### 验证
- 生成一个速度为100的球员，奔跑吧
- 生成一个速度为1的球员，奔跑吧
- 生成好多速度随机的球员，一起跑步比赛吧

#### 让球员跑得更真实
##### 需求
我们知道，球员跑步速度不仅仅和最高速度有关系，还和体力，爆发力相关
<br/>

爆发力强，则加速到最快速度会比较快，体力好，坚持在最高速度会比较久
<br/>

所以给球员增加这两个属性，然后再让大家奔跑看看

##### 设计
爆发力和体力依然用 1-99 范围内的整数来设定，假设有如下物理意义：
- 爆发力为 99 表示能够在 1 秒就达到最高速度
- 爆发力为 1 表示需要 4 秒才能达到最高速度

假设爆发力和需要多长时间达到最高速度是线性关系，请自行推导公式
- 体力为 99 表示能够在最高速度上坚持 15 秒
- 体力为 1 表示能够在最高速度上坚持 10 秒

假设体力和能够在最高速度上坚持的时间是线性关系，请自行推导公式

##### 验证
生成不同的怪异数值球员进行比赛吧，也可以根据比赛结果适当调整各种数值的物理计算公式