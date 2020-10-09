//一.npm 命令
/*
1)npm -v :查看npm的版本
2）npm version： 查看所有模块的版本
3）npm search 包名：搜索包
4）npm install/i 包名：安装包
5）npm remove/r 包名：删除包
6）npm install 包名 --save：安装包并添加到依赖中
7）npm install 下载当前项目所依赖的包
8）npm install 包名 -g:全局安装包（全局安装的包一般都是一些工具）
*/

//二.package.json文件
/*
package.json文件是对包的详细介绍。
*/

//三.node搜索包的流程
/*
node在使用模块名来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块，
如果有则直接使用，如果没有则会取上一级目录的node_modules中寻找，
如果有则直接使用，如果没有则再去上一级目录中寻找，知道找到为止，
直到找到磁盘的目录，如果依然没有，则报错
 */

 //四.Buffer（缓冲区）
 /*
    -Buffer的结构和数组特别像，操作的方法也和数组类似。
    -数组中不能存储二进制文件，而buffer就是专门用来存储二进制数据的。
    -使用buffer不需要引入模块，直接使用即可。
    buffer中每一个元素的范围是从00-ff（00000000  -  11111111）;
    buffer中的一个元素，占用内存的一个字节（一个字节byte=8个bit，）;
    buffer的大小一旦确定，则不能修改，buffer实际上是对底层内存的直接操作。
 */
var str = "hello Ajtguigu";
//将一个字符串保存到buffer中
var buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);
console.log(str.length);

//创建一个指定大小的buffer
var buf2 = Buffer.alloc(10);
console.log(buf2);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
//buffer的大小一旦确定，则不能修改，buffer实际上是对底层内存的直接操作。
buf2[10] = 10;
//只要数字在控制台或页面中输出，则一定是10进制。
console.log(buf2[2]);
