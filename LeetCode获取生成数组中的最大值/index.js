function getMaximumGenerated(n) {
    var nums = [];
    for (var i = 0; i <= n; i++) {
        if (i === 0) {
            nums.push(0);
        }
        if (i === 1) {
            nums.push(1);
        }
        if (2 <= 2 * i && 2 * i <= n) {
            nums[2 * i] = nums[i];
        }
        if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1];
        }
    }
    console.log(nums);
    return Math.max.apply(Math, nums);
}
;
getMaximumGenerated(7);
