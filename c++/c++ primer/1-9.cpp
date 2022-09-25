#include<iostream>

int main(){
    int sum = 0;
    int i = 50;
    while(i < 100){
        sum = sum + i;
        i = i + 1;
    }
    std::cout << sum << std::endl;
}