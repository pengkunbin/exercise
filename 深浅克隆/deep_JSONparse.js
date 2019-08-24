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


