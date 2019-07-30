/** 局部作用域 */
// var
var arr = [1,2,3];
for(var a=0;a<arr.length;a++) {
    setTimeout(function() {
        console.log(arr[a]);
    },0)
}
// 输出：undefined undefined undefine (都取的arr[3]的值)
// let
let arr2 = [1,2,3];
for(let b =0;b<arr2.length;b++) {
    setTimeout(function() {
        console.log(arr2[b]);
    },0)
}
// 输出：1 2 3

/** let的暂时性死区 */
var name = 'en';
{
    console.log(name);
    let name = 'wumj';
}
// Uncaught ReferenceError: Cannot access 'name' before


/** let 不可重复声明变量 */
// var 可重复声明
var i=0;
var i=1;
// let 不可
let j=0;
let j=1;   
//Uncaught SyntaxError: Identifier 'j' has already been declared


/** 函数内不能用let覆盖参数，会报错 */
function abc(a) {
    let a = 5;
}
//Uncaught SyntaxError: Identifier 'a' has already been declared