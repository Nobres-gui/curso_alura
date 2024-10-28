#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {

	printf("************************************");
	printf("* Bem vindo ao jogo de adivinhação *");
	printf("************************************\n");

	// int xxxxxx = xx;
	int segundos = time(0);
	srand(segundos);

	int numerogrande = rand();

	int numeroSecreto = numerogrande % 100;

	// %d insere o valor da variavel o texto
	int chute;
	int acertou;
	int nivel;
	int numeroTentativas;

	// definindo a quantidade de pontos inicial
	double pontos = 1000;

	// gerando um numero secreto aleatorio

	int ganhou = 0;
	int tentativas = 0;

	printf("\n Qual o nível de dificuldade?\n");
	printf("(1) Fácil (2) Médio (3) Difícil\n\n");
	printf("Escolha: ");

	scanf("%d", &nivel);

	switch (nivel) {
	case 3:
		numeroTentativas = 20;
		break;
	case 2:
		numeroTentativas = 15;
		break;
	default:
		numeroTentativas = 6;
		break;
	}

	for (tentativas = 1; tentativas <= numeroTentativas; tentativas++) {
		// while (ganhou == 0)

		// printf("\nTentativa %d de %d \n", tentativas, NUMERO_TENTATIVAS);
		printf("-> Tentativa %d de %d\n", tentativas, numeroTentativas);
		printf("qual e o seu chute? ");
		scanf("%d", &chute);
		printf("Seu chute foi %d \n", chute);

		if (chute < 0) {
			printf("Você não pode chutar números negativos\n");
			// tentativas--;
			continue;
		}

		int acertou = (chute == numeroSecreto);
		int maior = chute > numeroSecreto;

		if (acertou) {
			break;
		} else if (maior) {
			printf("Seu chute foi maior que o número secreto\n");
		} else {
			printf("Seu número é menor que o número secreto\n");
		}

		double pontosperdidos = abs(chute - numeroSecreto) / 2.0;
		pontos = pontos - pontosperdidos;
	}

	if (acertou) {
		printf("\nParabéns! Você acertou!\n");
		printf("Você fez %.2f pontos. Até a próxima!\n\n", pontos);
	} else {

		printf("       \\|/ ____ \\|/    \n");
		printf("        @~/ ,. \\~@      \n");
		printf("       /_( \\__/ )_\\    \n");
		printf("          \\__U_/        \n");

		printf("\nVocê perdeu! Tente novamente!\n\n");
	}

}
