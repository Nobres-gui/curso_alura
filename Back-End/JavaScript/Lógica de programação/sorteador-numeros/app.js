
let numerosSorteados = [];
function sortear() {
    
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let numeroAleatorio = obterNumeroAleatorio(de, ate, quantidade);
    console.log(numerosSorteados);
    let numeroSorteado;
    
    for (let contador = 1; contador <= quantidade; contador++) {
        numeroSorteado = obterNumeroAleatorio(de, ate)
        
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);
        
    }
    
    
    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class="texto__paragrafo"> Números sorteados: ${numerosSorteados} </label>`;
    
    limparDados();
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    let btnRecomecar = document.getElementById('btn-reiniciar');
    if (btnRecomecar.classList.contains('container__botao-desabilitado')) {
        btnRecomecar.classList.remove('container__botao-desabilitado');
        btnRecomecar.classList.add('container__botao');
} else {
        btnRecomecar.classList.remove('container__botao');
        btnRecomecar.classList.add('container__botao-desabilitado');
}
}

function limparDados () {
    numerosSorteados = [];
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}
