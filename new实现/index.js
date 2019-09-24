const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const selfNew = function (object, ...args) {
    let instance = Object.create(fn.prototype)
    let result = object.apply(instance, args)
    return isComplexDataType(result) ? result : instance
}