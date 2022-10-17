function minDifficultyDfs(jobDifficulty: number[], d: number): number {
    if (d > jobDifficulty.length) {
        return -1
    }

    const cache = new Map();

    function dfs(idx: number, count: number) {
        const key = idx * 100 + count;
        if (!cache.has(key)) {
            if (count === 1) {
                let max = 0;

                for (let i = idx; i < jobDifficulty.length; i++) {
                    jobDifficulty[i] > max && (max = jobDifficulty[i]);
                }
                console.log("max", idx, max)

                return max;
            }



            let min = 10000;
            let curMax = 0;
            for (let i = idx; i <= jobDifficulty.length - count; i++) {
                // 维护一个最大值
                if (jobDifficulty[i] > curMax) curMax = jobDifficulty[i];

                // 遍历题目给的数组，跟上一次的最小值比较，维护最小值
                min = Math.min(min, curMax + dfs(i + 1, count - 1));

                console.log("min", { min, count, idx, curMax }, dfs(i + 1, count - 1))

            }
            cache.set(key, min);
        }
        return cache.get(key);
    }

    // 从 0 开始 表示从第 0 个索引开始遍历
    return dfs(0, d);

};

console.log("minDifficultyDfs:", minDifficultyDfs([2, 6, 3, 5, 4], 2))
