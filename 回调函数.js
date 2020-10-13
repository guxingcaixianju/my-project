//回调函数
function requset(argument){
    console.log('请求数据');
    console.log(argument(20,40));
    console.log('over');
}

function add(a,b){
    return a+b;
}
//当传入的参数是函数时，这个函数被称为回调函数
requset(add); //传入函数名