function newOperator(preobj, ...arg) {
    let obj = {}
    if (typeof preobj !== 'function') {
        throw ' newOperator\'s first param must be a function'
    }

    newOperator.target = preobj

    obj = Object.create(preobj.prototype)
    console.log(arg)
    //get the parameters passed in
    //or use arg
    const argsArr = [].slice.call(arguments, 1)
    //return value of the original function & binding this   
    const preobjReturnResult = preobj.apply(obj, argsArr)


    const isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null
    const isFunction = typeof ctorReturnResult === 'function';
    if (isObject || isFunction) {
        return ctorReturnResult
    }
    return obj
}

const a = function (a, b) {
    this.name = 'jizou'
    let print = function () {
        console.log('hello jizou')
    }
    return a + b
}

let newObj = newOperator(a, '1', 'string', 1)