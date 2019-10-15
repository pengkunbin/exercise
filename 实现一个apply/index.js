Function.prototype.myApply = function (context, args) {
    if (this === Function.prototype) {
        return undefined
    }
    const fn = Symbol()
    context[fn] = this
    let result
    if (isArray(args)) {
        result = context[fn](args)
    } else {
        result = context[fn]()
    }
    delete context[fn]
    return result
}