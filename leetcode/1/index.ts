function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map();
    nums.forEach((num, index) => {
        numMap.set(num, index);
    })
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numMap.has(diff) && numMap.get(diff) !== i) {
            return [i, numMap.get(diff)];
        }
    }
    return [];
};