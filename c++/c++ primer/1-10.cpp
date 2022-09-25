#include<iostream>

int main(){
    int sum = 0;
    int i = 10;
    while(i >= 0){
        sum = sum + i;
        i = i - 1;
    }
    std::cout << sum << std::endl;
}