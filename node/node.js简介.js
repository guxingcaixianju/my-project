//1.Node.js简介
/*
   node.js是一个能够在服务器端运行js的js运行环境。采用谷歌开发的V8引擎运行js代码。

   在node中有一个全局对象global，它的作用和网页中的window类似，
   在全局中创建的变量都会作为global的属性保存
   在全局中创建的函数都会作为global的方法保存

*/

//引入math模块
// var math = require('./math.js');

// console.log(math);
// console.log(math.add(23,45));

var a =10;
console.log(global.a);
/*
当node执行模块中的代码时，它会首先在代码的最顶部，添加如下代码：
ƒ (exports, require, module, __filename, __dirname) {
在最底部添加 }

argument.callee这个属性保存的是当前执行的函数对象
 */

console.log(arguments.callee);