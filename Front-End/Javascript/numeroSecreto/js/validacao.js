function verificarValor(chute) {
    const numero = +chute;
    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div> Chute inválido </div>';
        return
    }

    if (numeroIntervaloValor(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`;
        return
    }

    if(numero == numeroSecreto){
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h2>O número secreto era ${numeroSecreto}</h2>
            <button id='jogarNovamente' class='jogarNovamenteBtn'>Recomeçar Jogo</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `        <div>
            O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>
        </div>`
    } else {
        elementoChute.innerHTML += `        <div>
            O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>
        </div>`
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroIntervaloValor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})


