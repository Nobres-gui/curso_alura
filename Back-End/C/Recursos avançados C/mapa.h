#ifndef _MAPA_H_
#define _MAPA_H_

#define HEROI '@'
#define VAZIO '.'
#define PAREDE_VERTICAL '|'
#define PAREDE_HORIZONTAL '-'
#define FANTASMA 'F'
#define PILULA 'P'

struct mapa
{
    char** matriz;
    int linhas;
    int colunas;
};

typedef struct mapa MAPA;

void alocarMapa(MAPA* m);
void lerMapa(MAPA* m);
void liberarMapa(MAPA* m);

struct posicao
{
    int x, y;
};

typedef struct posicao COORDENADAS;

int encontrarMapa(MAPA* m, COORDENADAS* p, char c);

int posicaoValida(MAPA*, int x, int y);
int parede(MAPA *m, int x, int y);
int personagem(MAPA *m, char p, int x, int y);

void andarMapa(MAPA* m, int destinoX, int destinoY, int origemX, int origemY);

void copiaMapa(MAPA *destino, MAPA *origem);

int direcaoValida(MAPA* m,char p, int x, int y);

#endif