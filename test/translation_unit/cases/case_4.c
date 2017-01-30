#include<stdio.h>


inline int factorial(int n){
   if(n ==1 || n == 0) return 1;
   else return (n * factorial(n-1));
}

double nPr(int n, int r){
   return factorial(n)/factorial(n-r);
}

int main(int argc, char *argv[]){
   int a, b;
   a = factorial(5);
   b = nPr(5, 2);
   printf("%d\n %d", a, b);
   return 0;
}
