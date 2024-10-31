function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (tipo.value == "pista") {
        comprarPista(qtd);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd);
    } else if(tipo.value == "inferior"){
        comprarInferior(qtd);
    }
    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert("Quantidade indisponível para tipo Pista");
    } else {
        document.getElementById('qtd-pista').textContent = qtdPista - qtd;
        alert("Compra realizada com sucesso");
        qtdPista.textContent = qtdPista;
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível para tipo Cadeira Superior");
    } else {
        document.getElementById('qtd-superior').textContent = qtdSuperior - qtd;
        alert("Compra realizada com sucesso");
        qtdSuperior.textContent = qtdSuperior;
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert("Quantidade indisponível para tipo Cadeira Inferior");
    } else {
        document.getElementById('qtd-inferior').textContent = qtdInferior - qtd;
        alert("Compra realizada com sucesso");
        qtdInferior.textContent = qtdInferior;
    }
}