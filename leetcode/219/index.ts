function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const temp = new Map();
    for (let i = 0; i < nums.length; i++) {

        if (temp.has(nums[i]) && i - temp.get(nums[i]) <= k ) {
            return true;
        }
        temp.set(nums[i], i)
    }


    return false;
};