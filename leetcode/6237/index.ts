function distinctAverages(nums: number[]): number {
    if (nums.length === 1 || nums.length === 2) {
        return 1
    }
    const set = new Set();

    nums.sort((a, b) => {
        return a - b
    })

    for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
        // console.log("i", i, j)
        set.add((nums[i]+nums[j])/2)
    }

    // console.log("🚀 ~ file: index.ts ~ line 8 ~ distinctAverages ~ nums", nums)


    return set.size;
};

console.log("🚀 ~ file: index.ts ~ line 2 ~ distinctAverages ~ distinctAverages", distinctAverages([4, 1, 4, 0, 3, 5]))
