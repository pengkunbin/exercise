const threeSumClosest = function (nums, target) {
    // 拿到数组的长度
    let N = nums.length;
    // 用来记录当前最接近target的数字
    let res = Number.MAX_SAFE_INTEGER
    // 将数组排序
    nums.sort((a, b) => a - b)
    // 第一个循环是遍历数组，从第一个数字开始
    for (let i = 0; i < N; i++) {
        // left取第二个数字
        let left = i + 1
        // right取最后一个数字
        let right = N - 1
        // 当左坐标大于右坐标时说明循环应该结束
        while (left < right) {
            // 当次循环的总和
            let sum = nums[i] + nums[left] + nums[right]
            // 如果当次循环的总和小于最理想的和，那么重新赋值
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }
        }
    }
    return res
};
