/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 
 * 示例 1：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 示例 2：
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 示例 3：
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 */

/**
 * 动态规划解法
 * 时间复杂度: O(n²)
 * 空间复杂度: O(n)
 */
function lengthOfLIS_DP(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    // dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
    const dp: number[] = new Array(nums.length).fill(1);
    
    let maxLength = 1;
    
    // 对于每个元素，检查它与之前所有元素的关系
    for (let i = 1; i < nums.length; i++) {
        // 查看所有之前的元素
        for (let j = 0; j < i; j++) {
            // 如果当前元素大于之前的元素，可以形成更长的递增子序列
            if (nums[i] > nums[j]) {
                // 更新 dp[i] 为 dp[j] + 1 和当前 dp[i] 的较大值
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 更新全局最大长度
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
}

// 测试用例
console.log(lengthOfLIS_DP([10, 9, 2, 5, 3, 7, 101, 18])); // 输出: 4
console.log(lengthOfLIS_DP([0, 1, 0, 3, 2, 3])); // 输出: 4
console.log(lengthOfLIS_DP([7, 7, 7, 7, 7, 7, 7])); // 输出: 1
console.log(lengthOfLIS_DP([0, 1, 0, 3, 3, 4, 2, 3])); // 输出: 4
