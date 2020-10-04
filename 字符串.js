var http= require('http');
var server = http.createServer();
server.on('request',function(request,response){
    
    let data = {
        name:"alan"
    };
    data = JSON.stringify(data);
    response.end(data);
});

server.listen(9788,function(){
    console.log("服务器创建成功");
});