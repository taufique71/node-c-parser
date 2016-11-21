#include <stdio.h>

int factorial(int n){
    if(n == 1) return 1;
    else return n*factorial(n-1);
}

int main(){
    int a;
    printf("Input number:\n");
    scanf("%d", &a);
    printf("Factorial of given number is: %d\n", factorial(a));
    return 0;
}
