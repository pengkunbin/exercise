const arry = [3, 5, 15, 36, 38, 44, 26, 27, 50, 46, 47, 49]

const bubbleSort = function (arry) {
    for (let i = 0; i < arry.length; i++) {
        for (let j = 0; j < arry.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}