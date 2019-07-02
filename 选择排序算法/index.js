const arry = [3, 5, 15, 36, 38, 44, 26, 27, 50, 46, 47, 49]

const selectionSort = function (arry) {
    for (let i = 0; i < arry.length - 1; i++) {
        let index = i
        for (let j = i + 1; j < arry.length; j++) {
            if (arry[index] > arry[j]) {
                index = j
            }
        }
        let temp = arry[i]
        arry[i] = arry[index]
        arry[index] = temp
        console.log(arry)
    }
    return arry
}

console.log(selectionSort(arry))