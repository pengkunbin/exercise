#include <iostream>
#include <stack>

class CQueue
{
private:
    std::stack<int> intStack, outStack;

    void in2out()
    {
        while (!intStack.empty())
        {
            outStack.push(intStack.top());
            intStack.pop();
        }
    }

public:
    CQueue() {}

    void appendTail(int value)
    {
        intStack.push(value);
    }

    int deleteHead()
    {
        if (outStack.empty())
        {
            if (intStack.empty())
            {
                return -1;
            };
            in2out();
        }
        int value = outStack.top();
        outStack.pop();
        
        std::cout << value ;

        return value;
    }
};

int main(int argc, char const *argv[])
{
    CQueue *queue = new CQueue();
    queue->deleteHead();
    queue->appendTail(5);
    queue->appendTail(2);
    return 0;
}
