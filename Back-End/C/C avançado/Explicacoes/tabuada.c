#include <stdio.h>

void abertura(int m) {
     printf("Tabuada do %d\n", m);
     }

int main () {
    
    int multiplicador = 2;
    
    abertura(multiplicador);
    
    for(int i = 1; i <= 10; i++){
        printf("%d * %d = %d\n", multiplicador, i, multiplicador * i);    
    }
}
