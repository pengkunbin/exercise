const myNew = function (object, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, object.prototype)
    let result = object.apply(obj, args)
    return result instanceof Object ? result : obj
}