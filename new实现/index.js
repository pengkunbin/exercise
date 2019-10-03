const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const selfNew = function (object, ...args) {
    let instance = Object.create(object.prototype)
    console.log('fn',instance)
    let result = object.apply(instance, args)
    return isComplexDataType(result) ? result : instance
}

function father(x, y, z) {
    this.name = 'pkb'
    this.age = '18'
    this.x = x
    this.y = y
    this.z = z
}

const f = selfNew(father, 1, 2, 3)