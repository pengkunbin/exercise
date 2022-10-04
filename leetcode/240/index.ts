function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    let x = 0;
    const nLength = matrix.length;
    const mLength = matrix[0].length;
    let y = mLength - 1;

    while (x < nLength && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }

        if (matrix[x][y] > target) {
            y = y - 1;
        } else {
            x = x + 1;
        }

    }
    return false;
};