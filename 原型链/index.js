//原型模式

function Person() {

}

Person.prototype.name = 'pkb'
Person.prototype.age = '18'
Person.prototype.job = 'student'
Person.prototype.sayName = function () {
    console.log(this.name)
}

const person1 = new Person()
const person2 = new Person()

person1.name = 'Greg'
console.log(person1.name)
console.log(person2.name)

/**
 * 原型对象的最大问题就是由其共享的本性导致的
 * 对于包含引用类型的属性来说，问题就比较突出了
 */



//原型对象模式
function Person() {

}

Person.prototype = {
    name: 'pkb',
    age: '18',
    job: 'student'
    sayName: function () {
        console.log(`my name is ${this.name}`)
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})
/**
 * 原型对象的最大问题就是由其共享的本性导致的
 * 对于包含引用类型的属性来说，问题就比较突出了
 */


//组合使用原型模式和构造函数

function Person() {
    this.name = 'pkb'
    this.age = '18'
    this.job = 'student'
}

Person.prototype = {
    sayName: function () {
        console.log(`my name is ${this.name}`)
    }
}

Object.defineproperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})



// 依靠原型链的继承
function Father() {
    this.name = 'father'
}
Father.prototype.getFatherName = function () {
    console.log(this.sayName)
}

function Child() {
    this.name = 'child'
}
Child.prototype = new Father()
Child.prototype.getChildName = function(){
    console.log(this.name)
}

const instance = new Child()
