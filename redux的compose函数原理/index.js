const compose = function compose(...funcs) {
    if (funcs.length === 0) {
        console.log('0', arg)
        return arg => arg
    }
    if (funcs.length === 1) {
        console.log('1', funcs)
        return funcs[0]
    }
    return funcs.reduce((a, b) => {
        console.log('reduce', a, b)
        return (...args) => a(b(...args))
    })
}

const f0 = (x) => { console.log (x) }
const f1 = () => { console.log (1) }
const f2 = () => { console.log (2) }
let fArr = [f2, f1, f0];
console.log (compose (...fArr)(100))