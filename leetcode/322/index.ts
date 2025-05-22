/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 */

function coinChange(coins: number[], amount: number): number {
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 0; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (i - coins[j] >= 0) {
				dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
			}
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount]
}