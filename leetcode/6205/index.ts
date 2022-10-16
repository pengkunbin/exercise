function reverseArray(nums: number[]): number {
    const reverse: number[] = [];

    for (let k = 0; k < nums.length; k++) {
        const mid: string[] = []
        const midNumber = nums[k];
        for (let i = 0, j = String(midNumber).length - 1; i <= j; i++, j--) {
            mid[i] = String(midNumber)[j];
            mid[j] = String(midNumber)[i];
        }
        reverse.push(Number(mid.join('')))
    }
    const mergelist = nums.concat(reverse);

    const mergeSet = new Set();
    for (let i = 0; i < mergelist.length; i++) {
        mergeSet.add(mergelist[i])
    }
    return mergeSet.size;
}
function countDistinctIntegers(nums: number[]): number {
    const reverses = reverseArray(nums)
    return reverses;
};

countDistinctIntegers([1, 13, 10, 12, 31])