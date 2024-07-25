const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const imgBanner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const iniciarPausarBtn = document.querySelector('#start-pause span');
const iniciarPausarIcon = document.querySelector(".app__card-primary-butto-icon")

const ativarTemporizador = document.querySelector('#start-pause');
let tempoDecorridoSegundos = 1500;
let intervaloId = null;
const somIniciar = new Audio('./sons/play.wav');
const somPausar = new Audio('./sons/pause.mp3');
const somTempoFinalizado = new Audio('./sons/beep.mp3');

const displayTempo = document.querySelector('#timer');

const ativarMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');

musica.loop = true;
ativarMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();

    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto);
    imgBanner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>'
            break;
        case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada? <br> <strong class="app__title-strong">Faça uma pausa curta!</strong>'
            break;
        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar à superfície.<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>'
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoSegundos <= 0) {
        alert('Tempo finalizado!');
        somTempoFinalizado.play();
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar();
        return
    }
    tempoDecorridoSegundos -= 1;
    mostrarTempo();
}

ativarTemporizador.addEventListener('click', iniciarPausar)

function iniciarPausar() {
    if (intervaloId) {
        somPausar.play();
        zerar();
        return
    }
    somIniciar.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarPausarBtn.textContent = "Pausar"
    iniciarPausarIcon.setAttribute('src', `./imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId);
    iniciarPausarBtn.textContent = "Começar";
    iniciarPausarIcon.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' })
    displayTempo.innerHTML = `${tempoFormatado}`
}

mostrarTempo();