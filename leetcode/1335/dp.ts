const minDifficulty = (jobDifficulty, d) => {
    const LEN = jobDifficulty.length;
    if (LEN < d) return -1;
    const dp = Array.from({ length: LEN }, () => new Uint16Array(d + 1).fill(10000));

    for (let i = LEN - 1, curMax = 0; i >= 0; --i) {
        jobDifficulty[i] > curMax && (curMax = jobDifficulty[i]);
        dp[i][1] = curMax;
    }

    for (let i = 2; i <= d; ++i) {
        for (let j = 0; j <= LEN - i; ++j) {
            let max = 0;
            for (let k = j; k <= LEN - i; ++k) {
                jobDifficulty[k] > max && (max = jobDifficulty[k]);
                dp[j][i] = Math.min(dp[j][i], dp[k + 1][i - 1] + max);
            }
        }
    }

    return dp[0][d];
};

// [6, 5, 4, 3, 2, 1]
// dp[0][1] = 6   dp[1][1] = 6   dp[2][1] = 6                     dp[3][1] = 6                     dp[4][1] = 6                    dp[5][1] = 6
// dp[0][2] = -1  dp[1][2] = -1  dp[2][2] = dp[1][1] + nums[1]    dp[3][2] = dp[2][1] + nums[2]    dp[4][2] = dp[3][1] + nums[3]   dp[5][2] = dp[4][1] + nums[4] 
// dp[0][3] = -1  dp[1][3] = -1  dp[2][3] = -1                    dp[3][3] = dp[1][1] + nums[2]    dp[4][3] = dp[3][2] + nums[3]   dp[5][3] = dp[4][2] + nums[4]

const minDifficultyFaster = (jobDifficulty, d) => {
    const LEN = jobDifficulty.length;
    if (LEN < d) return -1;
    const dp = new Uint16Array(LEN + 1);

    for (let i = LEN - 1; i >= 0; --i) {
        dp[i] = jobDifficulty[i] > dp[i + 1] ? jobDifficulty[i] : dp[i + 1];
    }

    for (let i = 2; i <= d; ++i) {
        for (let j = 0; j <= LEN - i; ++j) {
            let max = 0;
            dp[j] = 10000;
            for (let k = j; k <= LEN - i; ++k) {
                jobDifficulty[k] > max && (max = jobDifficulty[k]);
                dp[j] > dp[k + 1] + max && (dp[j] = dp[k + 1] + max);
            }
        }
    }

    return dp[0];
};