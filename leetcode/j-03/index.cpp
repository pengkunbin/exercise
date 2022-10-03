#include<unordered_map>
#include<vector>

class Solution {
public:
    int findRepeatNumber(std::vector<int>& nums) {
        std::unordered_map<int, bool> map;
        for(int num : nums) {
            if(map[num]) return num;
            map[num] = true;
        }
        return -1;
    }
};
