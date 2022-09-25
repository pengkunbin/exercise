const arry = [3, 5, 15, 36, 38, 44, 26, 27, 50, 46, 47, 49]

//错误写法
const insertArray = function (arry) {
    for (let i = 1; i < arry.length; i++) {
        for (let j = i - 1; j < arry.length; j++) {
            let temp
            if (arry[i] < arry[j]) {
                temp = arry[i]
                arry[i] = arry[j]
                arry[j] = temp
            }
        }
    }
    return arry
}
console.log(insertArray(arry))

//正确写法
const insertionSort = function (arr) {
    const len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}