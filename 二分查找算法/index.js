const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]
const key = 11

//非递归写法
// const binary_search = function (arry, key) {
//     let mid = parseInt(arry.length / 2)
//     let right = arry.length - 1
//     let left = 0
//     while (left + 1 < right) {
//         if (key == arry[mid]) {
//             return true
//         } else if (key < arry[mid]) {
//             right = mid
//             mid = parseInt((left + right) / 2)
//         } else if (key > arry[mid]) {
//             left = mid
//             mid = parseInt((left + right) / 2)
//         }
//     }
//     return false
// }

//递归写法
const binary_search = function (arry, key, left, right) {
    const mid = parseInt((left + right) / 2)
    console.log(mid, arry[mid], key, key == arry[mid])
    if (key == arry[mid]) {
        return true
    } else if (key < arry[mid]) {
        binary_search(arry, key, left, mid)
    } else if (key > arry[mid]) {
        binary_search(arry, key, mid, right)
    } else {
        return false
    }
}

binary_search(arry, key, 0, 10)