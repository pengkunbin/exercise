const obj = {
    name: 'pkb',
    age: '21',
    address: {
        name: 'beijing',
        location: 'north'
    }
}
//防止属性拓展
Object.preventExtensions(obj)
//防止属性拓展，和被删除
Object.seal(obj)
//防止属性被修改
Object.freeze(obj)

const freeze = function (obj) {
    Object.freeze(obj)
    Object.keys(obj).forEach((item, index) => {
        if (Object.prototype.toString.call(obj[item]) === '[object Object]') {
            console.log(obj[item])
            freeze(obj[item])
        }
    });
}