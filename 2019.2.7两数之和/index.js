var twoSum = function(nums,target){
    var length = nums.length;
    var exist = {};
    for(var i =0;i<length;i++)
    {
        if(exist[target-nums[i]]!==undefined){
            return [exist[target-nums[i]],i];
        }
        exist[nums[i]]=i;
    }
}