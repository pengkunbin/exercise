#include <iostream>
#include <stack>

using namespace std;

class MinStack
{
    stack<int> minstack;
    stack<int> xstack;

public:
    MinStack()
    {
        minstack.push(INT_MAX);
    }

    void push(int value)
    {
        minstack.push(::min(minstack.top(),value));
        xstack.push(value);
    }

    void pop()
    {
        minstack.pop();
        xstack.pop();
    }

    int top()
    {
        return xstack.top();
    }

    int min()
    {
        return minstack.top();
    }
};
