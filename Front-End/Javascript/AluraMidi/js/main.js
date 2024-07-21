
function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento === null || elemento.localName != 'audio') {
        console.log('Elemento não encontrado')
    } else {
        elemento.play();
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const idElementoAudio = tecla.classList[1];
    const idAudio = `#som_${idElementoAudio}`

    console.log(idElementoAudio)

    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        console.log(evento.code);
    }
    tecla.onkeyup = function (evento) {
            tecla.classList.remove('ativa');
    }
}







// Usando while como ferramenta de repetição

// let contador = 0;

// while (contador < listaTeclas.length) {
//     const tecla = listaTeclas[contador];
//     const idElementoAudio = tecla.classList[1];
//     const idAudio = `#som_${idElementoAudio}`

//     console.log(idElementoAudio)

//     tecla.onclick = function () {
//         tocarSom(idAudio);
//     };

//     contador++
//     console.log(idAudio);
// }
