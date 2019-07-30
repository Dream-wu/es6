// 基础类型
const age=0;
age = 8;
// Uncaught TypeError: Assignment to constant variable.

// 引用类型
const ages = [8,9];
ages.push(10);
console.log(ages)  // [8,9,10]

ages = [6,7];
// Uncaught TypeError: Assignment to constant variable.