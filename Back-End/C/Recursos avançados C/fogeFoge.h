#ifndef _FOGEFOGE_H_
#define _FOGEFOGE_H_

#define CIMA 'w'
#define BAIXO 's'
#define DIREITA 'd'
#define ESQUERDA 'a'
#define BOMBA 'b'

int acabou();
void move(char direcao);

int ehDirecao(char direcao);
void fantasmas();
void explodePilula();
void explodePilula2(int x, int y, int somaX, int somaY, int qtd);

#endif