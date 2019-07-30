/** this指向问题 */
// 箭头函数： this => 定义时上下文环境
var age =9;
var test = {
    age: 8,
    timer: () => {
        console.log(this.age);  // this 定义时上下文
    }
}
test.timer();  //9

//匿名函数： this => 执行时下文环境
var age2 =9;
var test2 = {
    age2: 8,
    timer: function(){
        console.log(this.age2);  //this,执行时上下文
    }
}
test2.timer();  //8

/** 方法简写 */
function sum(a, b) {
    return a+b;
}
// 等价于
const sum2 = (a,b) => a+b;
// 等价于
const sum3 = (a,b) => {
    return a+b;
}