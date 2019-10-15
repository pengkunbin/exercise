Function.prototype.mybind = function (context, ...arg) {
    const self = this
    return function F(...arg2) {
        return self.apply(context, arg.concat(arg2))
    }
}

var name = 'pkb'

const Person = function (a, b, c) {
    this.name = 'cxk'
    this.a = a
    this.b = b

    console.log(this.name, this.a, this.b)
}

console.log(Person.mybind(this, 'a')('b'))
console.log(Person.bind(this, 'a')('b'))