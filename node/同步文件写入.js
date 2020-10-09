//同步文件写入过程
/*
操作完成后，一定要关闭文件
*/
var fs = require('fs');
// //1.打开文件-
// var fd =fs.openSync('hello.txt','w');
// //2.向文件中写入内容
// fs.writeSync(fd,"this is nice");
// //3.关闭文件
// fs.closeSync(fd);


// //下面这个是上面的简化版，其实也是3个步骤，只不过是将打开和关闭步骤封装到后台程序了而已。

// //简单文件写入
// fs.writeFile('hello3.txt','what are you doing',{flag:'w'},function(error){
//     if(!error){
//         console.log('写入成功');
//     }
// });

//同步、异步和简单文件写入都不适合大文件的写入，性能较差，容易导致内存溢出。而流式写入适合大文件的写入,方式类似于异步操作。


//可以通过监听流的open和close事件来监听流的打开和关闭
ws.once("open",function(){
    console.log('流打开了');
});
//流式文件写入
var ws = fs.createWriteStream('hello4.txt');
ws.write('通过可写流写入文件的内容');
//关闭流
ws.end();//这里不能用close,因为流写入类似于异步的操作。