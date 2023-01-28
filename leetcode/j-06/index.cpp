#include <vector>

using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    vector<int> reversePrint(ListNode *head)
    {
        ListNode *pre = NULL;
        ListNode *curr = head;

        while (curr)
        {
            ListNode *next = curr->next;
            curr->next = pre;
            pre = curr;
            curr = next;
        }

        vector<int> ans;
        while (pre)
        {
            ans.push_back(pre->val);
            pre = pre->next;
        }
        return ans;
    }
};