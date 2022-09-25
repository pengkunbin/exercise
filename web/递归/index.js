function factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5))


function factorialArgument(n) {
    if (n <= 1) {
        return 1
    } else {
        return n * arguments.callee(n - 1)
    }
}
console.log(factorialArgument(5))

var _factorial = function f(num) {
    if (num <= 1) {
        return 1
    } else {
        return num * f(num - 1)
    }
}
console.log(_factorial(5))