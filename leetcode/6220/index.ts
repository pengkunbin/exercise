function averageValue(nums: number[]): number {
    const evens = nums.filter(n => n % 2 === 0 && n % 3 === 0)
    if (evens.length === 0) {
        return 0;
    }
    return Math.floor(evens.reduce((acc, val) => acc + val, 0) / evens.length);
};
