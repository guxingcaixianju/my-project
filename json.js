//js语法是JS语法的子集
//json值可以是数字、字符串、逻辑值、数组、对象、null


var sites = [
    { "name":"runoob" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }];
console.log(sites[0].name);

//1.json对象
var aa = { "name":"runoob", "alexa":10000, "site":null };
console.log(aa.name);
console.log(aa["name"]);
//循环对象
var myObj = { "name":"runoob", "alexa":10000, "site":null };
var arr1 = [];
var arr2 = [];
for (x in myObj) {
  arr1.push(x)
}
console.log(arr1);
//还可以嵌套json对象
myObj = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    }
}

//2.json数组
//JSON 中数组值必须是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）。
//JavaScript 中，数组值可以是以上的 JSON 数据类型，也可以是 JavaScript 的表达式，包括函数，日期，及 undefined。
[ "Google", "Runoob", "Taobao" ]

//3.json.parse(),用 JSON.parse() 方法将数据转换为 JavaScript 对象。
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
//4.使用 JSON.stringify() 方法将 JavaScript 对象转换为json字符串。
var result = JSON.stringify(obj);
console.log(result);

json和js对象有什么区别呢？

首先，要搞清楚JSON和Object对象是什么关系；主要有以下的区别：
1、JSON是对象，但对象不一定是JSON
2、这一点是区别对象和JSON的重要关键点，对象的组成是由属性和属性值，也就是KEY->VALUE对组成
然而，还有一点是value可是是任意的数据类型，当value为一个函数的时候，这个时候叫做方法。而你通过
通过JSON.parse()传入的字符串并里面有VALUE为function的吗？得问一下。我想你不可能像下面的例子一样写这个被转换的字符串吧：
var a = '{name:"",say:function(){}}';
JSON.parse(a);
以上代码，是没有办法执行的。即使是服务器转换的JSON字符串，也没有把方法转换进这个字符串的。
3、在JSON对象中出现的value始终都不可能是一个函数，如果转换后添加进去方法，那就变成一个真正的JS对象了。
4、JSON是一种数据结构，并不是对象。因此没有方法。这个要仔细体会

总之，JSON和对象的区别就在于有没有方法，在JS中某种意义上讲JSON.parse()转换的就是一个对象。
