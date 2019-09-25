const arr = [1, 2, 3, 4]

const selfMap = function (callback, context) {
    let arry = Array.prototype.slice.call(this)
    let mapArry = Array()
    for (let i = 0; i < arry.length; i++) {
        mapArry[i] = callback.call(context, arry[i], i, this)
    }
    return mapArry
}

Array.prototype.selfMap = selfMap

const result = arr.selfMap(value => value + 1)

console.log(result)
