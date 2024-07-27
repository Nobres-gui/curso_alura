let menorValor = 1
let maiorValor = 50
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto)
const elementoMenorValor = document.getElementById('menor-valor');
menorvalor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor');
maiorvalor.innerHTML = maiorValor;



