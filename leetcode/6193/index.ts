function maxSum(grid: number[][]): number {
    const m = grid.length;
    let max = 0;
    for (let i = 2; i < m; i++) {
        const n = grid[i].length
        for (let j = 2; j < n; j++) {
            const hourglass = grid[i - 2][j - 2] + grid[i - 2][j - 1] + grid[i - 2][j] + grid[i - 1][j - 1] + grid[i][j - 2] + grid[i][j - 1] + grid[i][j]
            // console.log("hourglass", grid[i - 2][j - 2], grid[i - 2][j - 1], hourglass)
            if (hourglass > max) {
                max = hourglass;
            }
        }
    }
    // console.log("max", max)


    return max;
};

maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]])

