#include <stdio.h>

int main() {
    int numero;
    
    printf("Escolha um número de 1 a 10?\n");
    scanf("%d", numero);
    
    for(int i = 1; i <=10; i++){
        int conta = numero * i;
        printf("%d  *  %d = %d\n", numero, i, conta);
    }
}