//...实现浅克隆
const person = { name: 'pkb', age: '20' }
const child = { ...person }

//Object.assgin实现浅克隆
const person = { name: 'cxk', singing: 'jinitaimei' }
const stupid = Object.assign({}, person)

//ES5

const shallowClone = function (obj) {
    const newObj = {}
    for (let i in obj) {
        newObj[i] = obj[i]
    }
    return newObj
}