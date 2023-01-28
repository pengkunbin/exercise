class Solution
{
public:
    int tribonacci(int n)
    {
        if (n == 0)
        {
            return 0;
        }

        if (n <= 2)
        {
            return 1;
        }

        int q = 0;
        int w = 0;
        int e = 1;
        int r = 1;

        for (int i = 3; i <= n; i++)
        {
            q = w;
            w = e;
            e = r;
            r = w + e + q;
        }

        return r;
    }
};