const name = Symbol('name')
class People {
    constructor(n) {
        this[name] = n
    }
    sayName() {
        console.log(this[name])
    }
}