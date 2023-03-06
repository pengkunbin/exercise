#include <string>

using namespace std;

class Solution {
public:
    string reverseLeftWords(string s, int n) {
        //空间复杂度为O(1)
        reverse(s.begin(), s.begin() + n);
        reverse(s.begin() + n, s.end());
        reverse(s.begin(), s.end());
        return s;
    }
};
