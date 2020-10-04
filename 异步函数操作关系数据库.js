//数据库异步操作

//1)插入操作

//下行中注意单引号和双引号的配合使用，SQL插入语句请自行查询理解
var SqlStr = "INSERT INTO table01(name,age,gender) VALUES('alan','18','male')";
var dataSourceName = "lian_00";
var ret = AsynSQLExecute(dataSourceName,SqlStr,function(error,datas){
    if(error){
        console.log("error"+error);
    }else{
        console.log(datas);
    }
});
console.log(ret);
//ret返回值为0表示插入成功，可到数据库的表中查看结果

//2）更新操作
var SqlStr = "UPDATE table01 SET name = Alice WHERE age = 18";
var dataSourceName = "lian_00";
var ret = AsynSQLExecute(dataSourceName,SqlStr,(error,datas)=>{
    if(error){
        console.log("error"+error);
    }else{
        console.log(datas);
    }
});
console.log(ret);

//3)删除操作
var SqlStr = "DELETE FROM table01 WHERE name = alan";
var dataSourceName = "lian_00";
var ret = AsynSQLExecute(dataSourceName,SqlStr,(error,datas)=>{
    if(error){
        console.log(error);
    }else{
        console.log(datas);
    }
});
console.log(ret);