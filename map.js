const { POINT_CONVERSION_COMPRESSED } = require("constants");

var map = new Map();
//设置
map.set("A","aaaa");
map.set("B","bbbb");
map.set("C","cccc");

console.log(map);

// 取值
let v = map.get("A");
console.log(v);

//判断key是否存在
let boo = map.has("D");
console.log(boo);

