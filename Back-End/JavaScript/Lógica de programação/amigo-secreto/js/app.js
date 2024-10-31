let amigosAdicionados = [];

function adicionar(params) {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    
    amigosAdicionados.push(amigo.value);

    if (amigo.value == '') {
        alert("informe o nome do amigo");
        return;
    }
    
    if (amigosAdicionados.includes(amigo.value)) {
        alert("Nome já adicionado");
        return;
    }

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = `${listaAmigos.textContent}, ${amigo.value}`;
    }
    amigo.value = '';
}

function sortear() {

    if (amigosAdicionados.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }

    embaralha(amigosAdicionados);
    let listaSorteio = document.getElementById('lista-sorteio');

    
    for (let i = 0; i < amigosAdicionados.length; i++) {
        if(i == amigosAdicionados.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigosAdicionados = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}