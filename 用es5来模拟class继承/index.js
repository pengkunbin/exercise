class Father {
    constructor() {
        this.address = 'BeiJing'
    }
    fatherSay() {
        console.log('helloworld')
    }
}

class Child extends Father {
    constructor() {
        super()
        this.name = 'cxk'
        this.age = 21
    }
    childSay() {
        console.log('ji$ni$tai$mei')
    }
}

function preFather() {
    this.address = 'BeiJing'
}

preFather.prototype.fatherSay = function () {
    console.log('helloworld')
}

function preChild() {
    preFather.call(this)
    this.name = 'cxk'
    this.age = 21
}

preChild.prototype = new preFather()

preChild.prototype.childSay = function () {
    console.log('ji$ni$tai$mei')
}

// function createObj(obj) {
//     function F() {

//     }
//     F.prototype = obj
//     return new F()
// }

// function myExtends(child, father) {
//     var prototype = createObj(father.prototype)
//     prototype.constructor = child
//     child.prototype = prototype
// }

// myExtends(preChild, preFather)

var preChild = new preChild()
const child = new Child()

console.log(preChild, child)