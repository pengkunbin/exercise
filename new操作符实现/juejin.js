// 例子1
function Student() {
}
var student = new Student();
console.log(student); // {}
// student 是一个对象。
console.log(Object.prototype.toString.call(student)); // [object Object]
// 我们知道平时声明对象也可以用new Object(); 只是看起来更复杂
// 顺便提一下 `new Object`(不推荐)和Object()也是一样的效果
// 可以猜测内部做了一次判断，用new调用
/** if (!(this instanceof Object)) {
*    return new Object();
*  }
*/
var obj = new Object();
console.log(obj) // {}
console.log(Object.prototype.toString.call(obj)); // [object Object]

typeof Student === 'function' // true
typeof Object === 'function' // true
