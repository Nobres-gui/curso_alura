alert('Bem vindo ao jogo número secreto');
let numeroMenor = 0;
let numeroMaior = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaior + 1);
console.log(numeroSecreto)
let chute;

let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre ${numeroMenor} e ${numeroMaior}}`);
    if (chute == numeroSecreto) {

        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++
    }
}
 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
