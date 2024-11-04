#include <stdio.h>
#include <locale.h>
#include <stdlib.h>
#include <string.h>
#include "mapa.h"

void lerMapa(MAPA *m)
{
    FILE *f;
    f = fopen("mapa.txt", "r");
    if (f == 0)
    {
        printf("Erro na leitura do mapa\n");
        exit(1);
    }

    fscanf(f, "%d %d", &(m->linhas), &(m->colunas));
    alocarMapa(m);

    for (int i = 0; i < m->linhas; i++)
    {
        fscanf(f, "%s", m->matriz[i]);
    }
    fclose(f);
}

void alocarMapa(MAPA *m)
{
    m->matriz = malloc(sizeof(char *) * m->linhas);
    for (int i = 0; i < m->linhas; i++)
    {
        m->matriz[i] = malloc(sizeof(char) * m->colunas + 1);
    }
}

void copiaMapa(MAPA *destino, MAPA *origem)
{
    destino->linhas = origem->linhas;
    destino->colunas = origem->colunas;

    alocarMapa(destino);
    for (int i = 0; i < origem->linhas; i++)
    {
        strcpy(destino->matriz[i], origem->matriz[i]);
    }
}

void liberarMapa(MAPA *m)
{
    for (int i = 0; i < m->linhas; i++)
    {
        free(m->matriz[i]);
    }
    free(m->matriz);
}

int encontrarMapa(MAPA *m, COORDENADAS *p, char c)
{
    // acha a posicao do fogefoge
    for (int i = 0; i < m->linhas; i++)
    {
        for (int j = 0; j < m->colunas; j++)
        {
            if (m->matriz[i][j] == c)
            {
                p->x = i;
                p->y = j;
                return 1;
            }
        }
    }
    return 0;
}

int direcaoValida(MAPA *m, char p,int x, int y)
{
    return posicaoValida(m, x, y) &&
           !parede(m, x, y) &&
           !personagem(m, p, x, y);
}

int posicaoValida(MAPA *m, int x, int y)
{
    if (x >= m->linhas)
        return 0;
    if (y >= m->colunas)
        return 0;

    return 1;
}

int personagem(MAPA *m, char personagem,int x, int y)
{
    return m->matriz[x][y] == personagem;
}

int parede(MAPA *m, int x, int y)
{
    return m->matriz[x][y] == PAREDE_VERTICAL || m->matriz[x][y] == PAREDE_HORIZONTAL;
}

void andarMapa(MAPA *m, int origemX, int origemY, int destinoX, int destinoY)
{
    int personagem = m->matriz[origemX][origemY];

    m->matriz[destinoX][destinoY] = personagem;
    m->matriz[origemX][origemY] = VAZIO;
}


