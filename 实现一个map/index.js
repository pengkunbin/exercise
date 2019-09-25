const arr = [1, 2, 3, 4]

arr.push(5)

Array.prototype.selfMap = function (callback, context) {
    let arry = Array.prototype.slice.call(this)
    let mapArry = Array()
    for (let i = 0; i < arry.length; i++) {
        if (!arry.hasOwnProperty(i)) {
            continue
        }
        mapArry[i] = callback.call(context, arry[i], i, this)
    }
    return mapArry
}

const result = arr.selfMap(value => value + 1)
