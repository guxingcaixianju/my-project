//  var items =[
//      {"name":true},
//      {"lg":false,"type":"string"},
//     {"age":true},
//      {"33":false,"type":"number"},
//     {"age":true},
//      {"11":false,"type":"number"},
//     {"id":true},
//      {"14":false,"tpye":"number"}
//  ];
// items.forEach(function(item1,index,array){
//   for(key in item1){
//     if(item1[key]===true){
//       items[key] = 0;
//     }
//   }
// })
// console.log(items);
  var arr = ['a','b','c'];	
	// arr.forEach(function(value,index,array){
	// 	console.log(value);
	// 	console.log(index);
	// 	console.log(array);
  // 	})
  for (item of arr){
    console.log(item);
  }