const Person = function () {
    this.name = 'cxk'
}
Person.prototype.sayName = function () {
    console.log('my name is' + this.name)
}
const cxk = new Person()

console.log(cxk.__proto__ === Person.prototype) //true
console.log(Person.prototype.constructor === Person) //true
console.log(Person.prototype.__proto__ === Object.prototype) //true
console.log(Person.prototype.__proto__.constructor === Object) //true 
console.log(Person.prototype.constructor) //true