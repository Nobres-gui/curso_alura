#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include "forca.h"
#include <locale.h>

// Cria um array;
char palavraSecreta[TAMANHO_PALAVRA];
char chutes[26];
int chutesDados = 0;

void abertura()
{
  printf("====== Jogo da Forca ======\n\n\n");
}

void chuta()
{

  char chute;
  printf("Qual a letra? ");
  scanf(" %c", &chute);
  // insere a letra chutada dentro do array pelo o n�mero da tentativa
  chutes[chutesDados] = chute;
  chutesDados++;
}

int chutou(char letra)
{
  int achou = 0;

  // For para validar a letra chutada com as da palavra
  for (int j = 0; j < chutesDados; j++)
  {
    if (chutes[j] == letra)
    {
      achou = 1;
      break;
    }
  }
  return achou;
}

void desenharForca()
{
  int erros = chutesErrados();

  printf("  _______           \n");
  printf(" |/      |        \n");
  printf(" |      %c%c%c  \n", (erros >= 1 ? '(' : ' '),
         (erros >= 1 ? '_' : ' '), (erros >= 1 ? ')' : ' '));
  printf(" |      %c%c%c  \n", (erros >= 3 ? '\\' : ' '),
         (erros >= 2 ? '|' : ' '), (erros >= 3 ? '/' : ' '));
  printf(" |       %c     \n", (erros >= 2 ? '|' : ' '));
  printf(" |      %c %c   \n", (erros >= 4 ? '/' : ' '),
         (erros >= 4 ? '\\' : ' '));
  printf(" |                \n");
  printf("_|___             \n");
  printf("\n\n");

  // For para a impressao do tamanho da palavra e da troca pela letra
  for (int i = 0; i < strlen(palavraSecreta); i++)
  {

    int achou = chutou(palavraSecreta[i]);

    // imprime a quantidade de letras e qual letra voc� acertou
    if (achou)
    {
      printf("%c ", palavraSecreta[i]);
    }
    else
    {
      printf("_ ");
    }
  }
  printf("\n");
}

void escolherPalavra()
{
  /* Determina a palavra que estará dentro do array;
  printf("%s", palavraSecreta);  %s puxa o valor de dentro do array;
  sprintf(palavraSecreta, "MELANCIA");*/

  // armazena o conteudo de um arquivo
  FILE *f;
  // abre um arquivo
  f = fopen("palavras.txt", "r");
  if (f == 0)
  {
    printf("Desculpe, banco de dados indisponivel");
    exit(1);
  }

  int qtdPalavras;
  // le a primira linha arquivo aberto
  fscanf(f, "%d", &qtdPalavras);
  // cria um numero randomico
  srand(time(0));
  int randomico = rand() % qtdPalavras;

  // le o arquivo de onde parou(como ja leu a primeira linha antes agr vai comecar pelas palavras)
  for (int i = 0; i <= randomico; i++)
  {
    fscanf(f, "%s", palavraSecreta);
  }

  fclose(f);
}

void adicionarPalavra()
{
  char adicionar;
  printf("Você deseja adicionar uma nova palavra ao jogo? (S/N): ");
  scanf(" %c", &adicionar);

  if (adicionar == 'S')
  {
    char novaPalavra[TAMANHO_PALAVRA];
    printf("Qual a nova palavra: ");
    scanf("%s", novaPalavra);

    FILE *f;
    // r+ significa ler o arquivo e escrever nele
    f = fopen("palavras.txt", "r+");
    if (f == 0)
    {
      printf("Desculpe, banco de dados indisponivel");
      exit(1);
    }

    int qtd;
    fscanf(f, "%d", &qtd);
    qtd++;

    // Volta para a linha que quiser do arquivo como ai esta 0 ent volta para a primeira
    fseek(f, 0, SEEK_SET);
    fprintf(f, "%d", qtd);

    // vai para o final do arquivo
    fseek(f, 0, SEEK_END);
    // adiciona ao arquivo uma nova palavra
    fprintf(f, "\n%s", novaPalavra);
    fclose(f);
  }
}

int acertou()
{
  for (int i = 0; i < strlen(palavraSecreta); i++)
  {
    if (!chutou(palavraSecreta[i]))
    {
      return 0;
    }
  }
  return 1;
}

int chutesErrados()
{
  int erros = 0;

  for (int i = 0; i < chutesDados; i++)
  {
    int existe = 0;

    for (int j = 0; j <= strlen(palavraSecreta); j++)
    {

      if (chutes[i] == palavraSecreta[j])
      {
        existe = 1;
        break;
      }
    }
    if (!existe)
      erros++;
  }
  return erros;
}

int enforcou()
{
  return chutesErrados() >= 5;
}

int main()
{
  setlocale(LC_ALL, "");

  escolherPalavra();
  abertura();
  // forca();

  do
  {

    desenharForca();
    chuta();

  } while (!acertou() && !enforcou());

  if (acertou())
  {
    printf("\nParabéns, você ganhou\n\n");
  }
  else
  {
    printf("A palavra era ****%s****", palavraSecreta);
  }

  adicionarPalavra();
  // system("pause");
  // return 0;
}
