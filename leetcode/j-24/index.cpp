#include<stdio.h>

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    ListNode *reverseList(ListNode *head)
    {
        ListNode *pre = NULL;
        ListNode *curr = head;
        while(curr){
            ListNode *nextNode = curr->next;
            curr->next = pre;
            pre = curr;
            curr = nextNode;
        }
        return pre;
    }
};