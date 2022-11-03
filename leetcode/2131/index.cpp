class Solution {
public:
    int longestPalindrome(vector<string>& words) {
        unordered_map<string, int> freq;   // 单词出现次数
        for (const string& word: words) {
            ++freq[word];
        }
        int res = 0;   // 最长回文串长度
        bool mid = false;   // 是否含有中心单词
        for (const auto& [word, cnt]: freq) {
            // 遍历出现的单词，并更新长度
            string rev = string(1, word[1]) + word[0];   // 反转后的单词
            if (word == rev) {
                if (cnt % 2 == 1) {
                    mid = true;
                }
                res += 2 * (cnt / 2 * 2);
            }
            else if (word > rev) {   // 避免重复遍历
                res += 4 * min(freq[word], freq[rev]);
            }
        }
        if (mid) {
            // 含有中心单词，更新长度
            res += 2;
        }
        return res;
    }
};
