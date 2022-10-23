function findErrorNums(nums: number[]): number[] {
    const hash: number[] = [];
    let ans = 0;
    let secAns = 0;
    nums.forEach(num => {
        if (hash[num]) {
            ans = num
        }
        hash[num] = 1;
    });

    for (let i = 1; i <= nums.length; i++) {
        if(!hash[i]){
            secAns = i;
            break;
        }
    }

    return [ans, secAns]
};