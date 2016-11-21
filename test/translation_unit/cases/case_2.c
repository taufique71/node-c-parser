#include <stdio.h>

int factorial(int n){
    if(n == 1) return 1;
    else return n*factorial(n-1);
}

int main(){
    int a;
    printf("Input number:\n");
    scanf("%d", &a);
    for(int i = 1; i <= a; i++){
        printf("Factorial of %d is: %d\n",i, factorial(i));
    }
    return 0;
}
