

const findBall = function(grid: number[][]) {
    const n = grid[0].length;
    const ans = new Array(n);
    for (let j = 0; j < n; j++) {
        let col = j; // 球的初始列
        for (const row of grid) {
            const dir = row[col];
            col += dir; // 移动球
            if (col < 0 || col === n || row[col] !== dir) { // 到达侧边或 V 形
                col = -1;
                break;
            }
        }
        ans[j] = col;  // col >= 0 为成功到达底部
    }
    return ans;
};

const case1 = [
    [1,1,1,-1,-1],
    // [1,1,1,-1,-1],
    // [-1,-1,-1,1,1],
    // [1,1,1,1,-1],
    // [-1,-1,-1,-1,-1]
]

// [ -1, -1, -1,  -1,  -1]
// [-1, 1, 2, 3, -1],



console.log("🚀 ~ file: index.ts ~ line 2 ~ findBall ~ findBall", findBall(case1))
