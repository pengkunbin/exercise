// 6207. Count Subarrays With Fixed Bounds
// You are given an integer array nums and two integers minK and maxK.

// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.

// A subarray is a contiguous part of an array.

function countSubarrays(nums: number[], minK: number, maxK: number): number {
    const minIndex = nums.findIndex(num => num === minK);
    const maxIndex = nums.findIndex(num=>num === maxK);
    return 0;
};



