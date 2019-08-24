//...实现浅克隆
const person = { name: 'pkb', age: '20' }
const child = { ...person }
child.name = 'jizou'
child.age = '18'
console.log(person)

//Object.assgin实现浅克隆

const person = { name: 'cxk', singing: 'jinitaimei' }
const stupid = Object.assign({}, person)
stupid.singing = 'oh baby baby'
console.log(person)
console.log(stupid)