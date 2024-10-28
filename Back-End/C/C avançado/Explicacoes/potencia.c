#include <stdio.h>
#include <locale.h>

void abertura(int base){
         printf("Potência do %d\n\n", base);
         }
void resultadoPotencia(int base, int expoente, int resultado){
     printf("%d ^%d = %d", base, expoente, resultado);
     }
int main () {
    setlocale(LC_ALL, "portuguese");
    
    
    
    int numeroBase = 2;
    int numeroExpoente;
    int resultado = numeroBase;
    
    abertura(numeroBase);
    
    printf("Escolha um expoente para a potência: ");
    scanf("%d", &numeroExpoente);
    
    for (int i = 1; i < numeroExpoente; i++){
        resultado = resultado * numeroBase;
    
    }
    resultadoPotencia(numeroBase, numeroExpoente, resultado);
}
