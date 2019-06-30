const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]


const target = 5

const searchMatrix = function (matrix, target) {
    let row = 0
    let column = matrix.length - 1
    let result = false
    while (column > -1 && row > -1 && column < matrix.length && row < matrix[0].length) {
        if (target === matrix[column][row]) {
            result = true
            break
        }
        target < matrix[column][row] ? column-- : row++
    }
    return result
};

searchMatrix(matrix, target)