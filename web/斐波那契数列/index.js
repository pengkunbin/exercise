function fibnacci(n) {
    return n < 2 ? n : fibnacci(n - 1) + fibnacci(n - 2)
}
console.log(fibnacci(6))

function fibnacciArgument(n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2)
}
console.log(fibnacciArgument(7))

let _fibnacci = function f(n) {
    return n < 2 ? n : f(n - 1) + f(n - 2)
}
console.log(_fibnacci(8))