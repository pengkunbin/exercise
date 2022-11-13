function scm(a: number, b: number) {
    return (a * b) / gcd(a, b);
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    const r = a % b;
    return gcd(b, r);
}

function isScmArray(subarray: number[], k: number): boolean {
    let temp = 1;
    for (let i = 0; i < subarray.length - 1; i++) {
        temp = scm(temp, scm(subarray[i], subarray[i + 1]));
    }
    return temp === k;
}

function subarrayLCM(nums: number[], k: number): number {
    let ans = 0
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 2; j <= nums.length; j++) {
            const subarray = nums.slice(i, j)
            if (isScmArray(subarray, k)) {
                ans++
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            ans++
        }
    }
    return ans;
};

console.log("subarrayLCM", subarrayLCM([2, 1, 1, 5], 5))
