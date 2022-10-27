function checkSubarraySum(nums: number[], k: number): boolean {
    const map = new Map();
    map.set(0, -1);
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp = (temp + nums[i]) % k;
        if (map.get(temp) || map.get(temp) === 0) {
            const index = map.get(temp);

            if (i - index >= 2) {
                return true;
            }
        } else {
            map.set(temp, i)
        }
    }

    return false;
};

// [23,2,4,6,7]
// [23,25,29,35,42]

// 5 1 5 

// [23,2,6,4,7]
// 5, 1, 1, 