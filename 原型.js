//原型
//JS对象和函数都有prototype原型，如果一个函数是构造函数，那么它new出的对象实例会继承这个构造函数的原型
function Empolyee(name,position){
    this.name = name; //定义属性
    this.position = position;
    this.Signin = function(){//定义一个方法
        console.log(this.name + "打卡");
    };

}

var emp1 = new Empolyee("alan","engineer");
// var emp2 = new Empolyee("wen","doctor");

//下面的由构造函数创建的实例具有原型对象__proto__,原型对象下有一个constrctor和一个__proto__
console.log(emp1);
// console.log(emp2);