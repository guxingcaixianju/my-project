var fs = require('fs');
var path = require('path');
fs.stat("./alan/wen/fsOperation.js",(err,stat)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(stat);
});
console.log(path.win32.basename('C:/windows/'));

