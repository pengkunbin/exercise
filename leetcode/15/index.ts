function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    // 拿到数组的长度
    let n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                left++;
                right--;
            }
            else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }
    return result
};
