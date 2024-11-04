#include <stdio.h>
#include "mapa.h"

char desenhoParede[4][7] = {
    {"......"},
    {"......"},
    {"......"},
    {"......"}};

char desenhoFantasma[4][7] = {
    {" .-.  "},
    {"| OO| "},
    {"|   | "},
    {"'^^^' "}};

char desenhoHeroi[4][7] = {
    {" .--. "},
    {"/ _.-'"},
    {"\\  '-."},
    {" '--' "}};

char desenhoPilula[4][7] = {
    {"      "},
    {" .-.  "},
    {" '-'  "},
    {"      "}};

char desenhoVazio[4][7] = {
    {"      "},
    {"      "},
    {"      "},
    {"      "}};

void imprimirParte(char desenho[4][7], int parte)
{
    printf("%s", desenho[parte]);
}

void imprimirMapa(MAPA *m)
{
    for (int i = 0; i < m->linhas; i++)
    {
        for (int partes = 0; partes < 4; partes++)
        {
            for (int j = 0; j < m->colunas; j++)
            {
                switch (m->matriz[i][j])
                {
                case FANTASMA:
                    imprimirParte(desenhoFantasma, partes);
                    break;
                case HEROI:
                    imprimirParte(desenhoHeroi, partes);
                    break;
                case PILULA:
                    imprimirParte(desenhoPilula, partes);
                    break;
                case PAREDE_VERTICAL:
                case PAREDE_HORIZONTAL:
                    imprimirParte(desenhoParede, partes);
                    break;
                case VAZIO:
                    imprimirParte(desenhoVazio, partes);
                    break;
                default:
                    break;
                }
            }
            printf("\n");
        }

        // printf("%s\n", m->matriz[i]);
    }
}