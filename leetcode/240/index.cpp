#include <vector>

class Solution
{
public:
    bool findNumberIn2DArray(std::vector<std::vector<int>> &matrix, int target)
    {
        int n = matrix.size();
        int x = 0;
        int m = matrix[0].size();
        int y = m - 1;

        while (x < n && y >= 0)
        {
            if (matrix[x][y] == target)
            {
                return true;
            }

            if (matrix[x][y] > target)
            {
                y = y - 1;
            }
            else
            {
                x = x + 1;
            }
        }

        return false;
    }
};