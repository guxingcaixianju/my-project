//js数组forEach遍历数组
var arr1 = [1,2,3,4];
//第一个参数是数组中的值，第二个参数是值对应的索引，第三个值是数组，其中第一个参数是必须的，第二个和第三个参数是可选的。
arr1.forEach(function(value,index){
    console.log("value:"+value,"index:"+index);
});

