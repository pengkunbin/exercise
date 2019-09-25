const arry = [1, 2, 3, 4]

arry.push(5)

Array.prototype.selfFilter = function (callback, context) {
    let filterArry = Array()
    let arry = Array.prototype.slice.call(this)
    for (let i = 0; i < arry.length; i++) {
        if (!arry.hasOwnProperty(i)) {
            continue
        } else {
            callback.call(context, arry[i], i, this) ? filterArry.push(arry[i]) : filterArry.push()
        }
    }
    return filterArry
}

const result = arry.selfFilter(value => value % 2 === 0)