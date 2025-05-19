function rob(nums: number[]): number {
    const dp = new Array(nums.length).fill(-1)

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0] || 0, nums[1] || 0);

    if(nums.length <= 2){
        return Math.max(dp[0] || 0, dp[1] || 0)
    }

    for(let i = 2; i< nums.length; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i] || 0)
    }

    return dp[dp.length - 1]
};