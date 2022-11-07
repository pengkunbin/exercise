class Solution {
public:
    long long maximumSubarraySum(vector<int>& nums, int k) {
        map<int,int> ma;
        long long ans = 0;
        
        int l = 0;
        int r = 0;
        long long  temp = 0;
        
        while(r < nums.size())
        {
            // 当前r进来
            // 维护map, 如果有重复元素 while(l++)
            if(ma[nums[r]] == 1)
            {
                while(nums[l] != nums[r]){
                    ma[nums[l]] = 0;
                    temp -= nums[l++];
                }
                l++;
            }
            else{
                ma[nums[r]] = 1;
                temp += nums[r];   
            }

            // 满足长度
            if(r - l + 1 == k) {
                if(ans < temp)
                    ans = temp;
                ma[nums[l]] = 0;
                temp -= nums[l++];
            }
            
            r++; 
        }
        return ans;
    }
};