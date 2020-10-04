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