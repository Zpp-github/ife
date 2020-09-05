### 课程目标
通过一个新的系列课程，我们来学习更多的JavaScript知识，比如如何在JavaScript使用面向对象编程，如何在你的设计中应用设计模式.

### 课程描述
#### 需求
我们现在要开一个餐厅啦，餐厅里面有服务员，有厨师，有顾客。学习面向对象，为餐厅和几个角色创建自己的类吧。
<br/>

餐厅可以招聘或者解雇职员，职员越多，就越能够满足更多的顾客需求，从而赚取更多的钱
<br/>

餐厅里的容量是有限的，当顾客坐满了，其他顾客需要排队
<br/>

服务员的工作有两个职责，一个是负责点菜，另外一个是上菜
<br/>

厨师的职责就一个，烹饪食物
<br/>

顾客可以做两件事情，一个是点菜，一个是吃
<br/>
系列任务的第一个部分，我们先只实现类的编写。并通过大量阅读掌握JavaScript的面向对象编程

#### 阅读
- [适合初学者的JavaScript面向对象 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [对象原型 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript 中的继承 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)
- [实践对象构造 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_building_practice)
- [JavaScript面向对象编程 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [深入理解Javascript面向对象编程](https://www.cnblogs.com/tugenhua0707/p/5068449.html)
- [JS 面向对象之继承---多种组合继承详解](https://www.jb51.net/article/88295.htm)
- [Javascript面向对象三大特性（封装性、继承性、多态性）详解及创建对象的各种方法](https://www.cnblogs.com/yanayana/p/6781166.html)

#### 设计
下面的设计只是草案，根据自己理解和需要自行设计
- 餐厅类
  - 属性：金钱，座位数量、职员列表
  - 方法：招聘职员，解雇职员
- 职员类
  - 属性：ID，姓名，工资
  - 方法：完成一次工作
- 服务员类，继承自职员
  - 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
- 厨师类，继承自职员
  - 完成一次工作：烹饪出菜品
- 顾客类
  - 方法：点菜，吃
- 菜品类
  - 属性：名字、烹饪成本、价格

#### 编码
请分别使用 ES5 和 ES6 来实现以上类的定义

#### 测试用例
测试用例伪代码，在Chrome控制台中执行
```js
var ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
});

var newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
```