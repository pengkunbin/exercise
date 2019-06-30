const singleNumber = function(nums) {
    let arry = []
    let result
    for(let i in nums) {
        arry[nums[i]] = !!arry[nums[i]] + 1
    }
    for(let i in arry){
        if(arry[i] === 1)
        {
            result = i
        }
    }
    return result
}