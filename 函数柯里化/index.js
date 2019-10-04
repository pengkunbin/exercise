//实现curry sum(1,2,3,4,5) === sum(1,2,3)(4)(5) === sum(1)(2)(3)(4)(5)

const curry = function (fn, length) {
    length = length || fn.length
    console.log('fn:',length)
    return function (...args) {
        console.log('args:', args)
        return args.length >= length ? fn.apply(this, args) : curry(fn.bind(this, ...args), length - args.length)
    }
}

const sum = curry(function (a, b, c, d, e) {
    console.log(a, b, c, d, e)
})

