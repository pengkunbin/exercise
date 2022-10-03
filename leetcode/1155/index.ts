function numRollsToTarget(n: number, k: number, target: number): number {
    const dp = new Array(k).fill(new Array(target).fill(0))
    const MOD = 1000000007;

    // 只有一次抛骰子的情况，当 target 值小于 k 时，返回 1，当 k 小于 target 时， 返回 0；
    for (let i = 1; i <= Math.min(k, target); i++) {
        dp[1][i] = 1;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= n * k; j++) {
            for (let kn = 0; kn <= k; kn++) {
                if(j < kn){
                    continue;
                }
                dp[i][j] = (dp[i - 1][j - kn] + dp[i][j]) % MOD
            }
        }
    }

    return dp[n][target];
};