#include <stdio.h>

int main(void){
       int i = 5, j = 7, k = 0, l;
       l = i || j;
       l = l && k;
       printf("%d\n", l);
       return 0;
}
