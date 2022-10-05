#include <iostream>
int main()
{
  int sum = 0;
  int value;
  for (; std::cin >> value;)
  {
    sum = sum + value;
    std::cout << sum << std::endl;
  }
}