var fs = require('fs');
path = require('path');
filePath = 'C:/Users/Administrator/Desktop/lianxi/kingdevopscenter3.6/exe/kingcalculation/exe/public/js/alan.txt';

//获取文件的当前路径
var result = path.dirname(filePath);
console.log("result:"+result);

//获取路径的最后一部分
var lastPartOfFileRoad = path.basename(filePath);
console.log("lastPartOfFileRoad:"+lastPartOfFileRoad)
// 获取文件名
var fileName = path.basename(filePath,'txt');
console.log("fileName:"+fileName)

//文件的当前绝对路径
console.log(__dirname);
//文件的完整绝对路径
console.log(__filename);
