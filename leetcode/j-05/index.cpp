#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    string replaceSpace(string s) {
        string temp;
        for (int i = 0; i < s.length(); i ++){
            if (s[i] == ' ') temp += "%20";
            else temp += s[i];
        }
        return temp;
    }
};
