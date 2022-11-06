function applyOperations(nums: number[]): number[] {

    for(let i =0;i<nums.length - 1;i++){
        if(nums[i]!==nums[i+1]){
            // ans[i] = nums[i];
            continue;
        }
        nums[i] = nums[i] * 2
        nums[i + 1] = 0;
    }

    const ans: number[] = [];
    let count = 0;
    for(let i =0;i<nums.length;i++){

        if(nums[i] === 0){
            count ++;
        }else{
            ans.push(nums[i])
        } 
    }

    while(count > 0){
        count --;
        ans.push(0)
    }

    // console.log("ans", nums, ans)
    return ans;
};


console.log("applyOperations", applyOperations([1,2,2,1,1,0]))
