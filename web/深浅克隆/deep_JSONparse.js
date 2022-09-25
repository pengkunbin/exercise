//JSON.parse方法
const oldObject = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: {
        h: {
            i: 2
        }
    }
}

const newObject = JSON.parse(JSON.stringify(oldObject))
newObject.c.h.i = 'ji ni tai mei'
console.log(oldObject)

//缺点
//1.他无法实现对函数 、RegExp等特殊对象的克隆
//2.会抛弃对象的constructor,所有的构造函数会指向Object
//3.对象有循环引用,会报错

//构造函数
function person(name) {
    this.name = name
}
const CXK = new person('cxk')

//函数
function sing() {
    console.log('ji ni tai mei')
}

const oldObject = {
    a: person,
    b: sing,
    c: new RegExp('ab+c','i')
    d: new Array(1)
}
const newObj = JSON.parse(JSON.stringify(oldObject))
// 无法复制函数
console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]

