let listaNumerosSorteados = [];
let numeroLimiteLista = 10;
let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);

let numeroTentativa = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

let botaoChutar = document.querySelector('#comecar');
let botaoRecomecar = document.getElementById('reiniciar');

botaoChutar.onclick = function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute > 10) {
        exibirTextoTela('p', 'Número digitado inválido');
        liparCampo();
        return;
    }

    if (chute == numeroAleatorio) {
        let palavraTentativa = numeroTentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${numeroTentativa} ${palavraTentativa}`
        exibirTextoTela('h1', 'Acertou!!!!');
        exibirTextoTela('p', mensagemTentativas);

        botaoRecomecar.removeAttribute('disabled');
    } else {
        let textoDica = chute > numeroAleatorio ? 'o número secreto é menor' : 'o número secreto é maior';
        exibirTextoTela('p', textoDica);
        liparCampo();
    }
    console.log(chute == numeroAleatorio);
}

function gerarNumeroAleatorio() {
    let qtdNumerosLista = listaNumerosSorteados.length;
    let numeroGerado = parseInt(Math.random() * numeroLimiteLista + 1);

    if(qtdNumerosLista == numeroLimiteLista){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroGerado);
        return numeroGerado;
    }
}

function liparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

botaoRecomecar.onclick = function verificarChute() {
    numeroAleatorio = gerarNumeroAleatorio();
    liparCampo();
    numeroTentativa = 1;
    exibirMensagemInicial();
    botaoRecomecar.setAttribute('disabled', true);
};