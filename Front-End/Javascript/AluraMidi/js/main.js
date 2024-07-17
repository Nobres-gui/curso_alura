const listaTeclas = document.querySelectorAll('.tecla');

function tocarSom() {
    document.querySelector('#som_tecla_pom').play();

}

listaTeclas[0].onclick = tocarSomPom;
