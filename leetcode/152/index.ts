/**
 * 152. 乘积最大子数组
 * 
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），
 * 并返回该子数组所对应的乘积。
 * 
 * 示例 1:
 * 输入: nums = [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 示例 2:
 * 输入: nums = [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 */

// 解法一：暴力解法（双重 for 循环）- 可能会超时
function maxProductBruteForce(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let maxProduct = nums[0];
    
    // 枚举所有可能的子数组
    for (let i = 0; i < nums.length; i++) {
        let currentProduct = 1;
        for (let j = i; j < nums.length; j++) {
            // 计算从 i 到 j 的子数组乘积
            currentProduct *= nums[j];
            // 更新最大乘积
            maxProduct = Math.max(maxProduct, currentProduct);
        }
    }
    
    return maxProduct;
}

// 解法二：动态规划 - O(n) 时间复杂度
function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    // 初始化最大乘积、最小乘积和结果
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];
    
    // 从第二个元素开始遍历
    for (let i = 1; i < nums.length; i++) {
        // 保存当前的最大和最小值，因为在计算新值时会用到
        const currentMax = maxSoFar;
        const currentMin = minSoFar;
        
        // 更新最大乘积
        // 当前值可能是：1. 当前元素自己 2. 当前元素 * 之前最大乘积 3. 当前元素 * 之前最小乘积（负负得正）
        maxSoFar = Math.max(nums[i], Math.max(currentMax * nums[i], currentMin * nums[i]));
        
        // 更新最小乘积（处理负数情况）
        minSoFar = Math.min(nums[i], Math.min(currentMax * nums[i], currentMin * nums[i]));
        
        // 更新结果
        result = Math.max(result, maxSoFar);
    }
    
    return result;
}

// 测试用例
console.log(maxProduct([2, 3, -2, 4])); // 输出: 6
console.log(maxProduct([-2, 0, -1])); // 输出: 0

// 暴力解法测试（小数据集）
console.log(maxProductBruteForce([2, 3, -2, 4])); // 输出: 6
console.log(maxProductBruteForce([-2, 0, -1])); // 输出: 0