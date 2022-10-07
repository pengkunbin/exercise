const nums = [1, 2, 3, 4, 4, 4, 4]
const majorityElement = function (nums) {
    let arry = []
    for (let i in nums) {
        if (!arry[nums[i]]) {
            arry[nums[i]] = !!arry[nums[i]] + 1
        }else {
            arry[nums[i]] ++
        }
    }
    for(let i in arry){
        if(arry[i] > nums.length/2){
            return i
        }
    }
};

console.log(majorityElement(nums))