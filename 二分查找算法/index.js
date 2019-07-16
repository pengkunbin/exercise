const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const key = 11

//非递归写法
const binary_search = function (arry, key) {
    let mid = parseInt(arry.length / 2)
    let right = arry.length - 1
    let left = 0
    while (left + 1 < right) {
        if (key == arry[mid]) {
            return true
        } else if (key < arry[mid]) {
            right = mid
            mid = parseInt((left + right) / 2)
        } else if (key > arry[mid]) {
            left = mid
            mid = parseInt((left + right) / 2)
        }
    }
    return false
}

//递归写法
const binary_search = function (arry, key, left, right) {
    let mid = parseInt((left + right) / 2)
}

binary_search(arry, key)