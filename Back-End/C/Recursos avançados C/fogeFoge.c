#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include "time.h"
#include "fogeFoge.h"
#include "mapa.h"
#include "ui.h"

MAPA m;
COORDENADAS heroi;
int temPilula = 0;

int acabou()
{
    COORDENADAS pos;
    int perdeu = !encontrarMapa(&m, &pos, HEROI);
    int ganhou = !encontrarMapa(&m, &pos, FANTASMA);

    return ganhou || perdeu;
}

int ehDirecao(char direcao)
{
    return direcao == ESQUERDA ||
           direcao == DIREITA ||
           direcao == CIMA ||
           direcao == BAIXO;
}

void move(char direcao)
{

    int proximoX = heroi.x;
    int proximoY = heroi.y;

    // m.matriz[heroi.x][heroi.y] = '.';

    switch (direcao)
    {
    case ESQUERDA:
        proximoY--;
        break;
    case DIREITA:
        proximoY++;
        break;
    case CIMA:
        proximoX--;
        break;
    case BAIXO:
        proximoX++;
        break;
    }

    if (!direcaoValida(&m, HEROI, proximoX, proximoY))
        return;

    if (personagem(&m, PILULA, proximoX, proximoY))
        temPilula = 1;

    andarMapa(&m, heroi.x, heroi.y, proximoX, proximoY);
    heroi.x = proximoX;
    heroi.y = proximoY;
}

int direcaoFantasma(int atualX, int atualY, int *destinoX, int *destinoY)
{
    int opcoes[4][2] = {
        {atualX, atualY + 1},
        {atualX + 1, atualY},
        {atualX, atualY - 1},
        {atualX - 1, atualY}};

    srand(time(0));

    for (int i = 0; i < 10; i++)
    {
        int posicao = rand() % 4;

        if (direcaoValida(&m, FANTASMA, opcoes[posicao][0], opcoes[posicao][1]))
        {
            *destinoX = opcoes[posicao][0];
            *destinoY = opcoes[posicao][1];
            return 1;
        }
    }
    return 0;
}

void fantasmas()
{
    MAPA copia;

    copiaMapa(&copia, &m);
    for (int i = 0; i < copia.linhas; i++)
    {
        for (int j = 0; j < copia.colunas; j++)
        {
            if (copia.matriz[i][j] == FANTASMA)
            {
                int destinoX;
                int destinoY;

                int encontrou = direcaoFantasma(i, j, &destinoX, &destinoY);

                if (encontrou)
                {
                    andarMapa(&m, i, j, destinoX, destinoY);
                }
            }
        }
    }
    liberarMapa(&copia);
}

void explodePilula()
{
    if(!temPilula) return;

    explodePilula2(heroi.x, heroi.y, 0, 1, 3);
    explodePilula2(heroi.x, heroi.y, 0, -1, 3);
    explodePilula2(heroi.x, heroi.y, 1, 0, 3);
    explodePilula2(heroi.x, heroi.y, -1, 0, 3);
    
    temPilula = 0;
}

void explodePilula2(int x, int y, int somaX, int somaY, int qtd)
{
    if (qtd == 0)
        return;

    int novoX = x + somaX;
    int novoY = y + somaY;

    if (!posicaoValida(&m, novoX, novoY))
        return;
    if (parede(&m, novoX, novoY))
        return;

    m.matriz[novoX][novoY] = VAZIO;
    explodePilula2(novoX, novoY, somaX, somaY, qtd - 1);
}

int main()
{
    setlocale(LC_ALL, "");
    // matriz 5 x 10

    lerMapa(&m);
    encontrarMapa(&m, &heroi, HEROI);

    do
    {
        imprimirMapa(&m);

        printf("Tem pilula: %s\n", (temPilula ? "SIM" : "NÃO"));

        char comando;
        scanf(" %c", &comando);

        if (ehDirecao(comando))
            move(comando);
        if (comando == 'b')
            explodePilula();

        fantasmas();

    } while (!acabou());
    liberarMapa(&m);

    // system("pause");
    // return 0;
}