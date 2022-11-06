function maximumSubarraySum(nums: number[], k: number): number {
    const tempSet = new Set<number>();
    
    let ans = 0;
    let count = 0;
    while (count < nums.length) {

        tempSet.add(nums[count]);
        const temp = [...tempSet];
        // console.log("temp", count, temp)
        


        let sum = 0;
        if (temp.length >= k) {
            for (let i = temp.length - k; i < temp.length; i++) {
                sum = temp[i] + sum;
            }
        }
        // console.log("sum", sum)

        if (sum > ans) {
            ans = sum
        }

        count++;

    }
    return ans;
};


console.log("maximumSubarraySum", maximumSubarraySum([3, 5, 3, 4], 2))
