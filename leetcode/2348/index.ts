function zeroFilledSubarray(nums: number[]): number {
    let ans = 0;
    let count = 0;

    for(let i = 0;i< nums.length ; i++){
        if(nums[i] === 0){
            count++;
            ans = ans + count; 
        }else{
            count = 0;
        }
    }
    return ans
};