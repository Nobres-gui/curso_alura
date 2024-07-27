const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.addEventListener('result', onSpeak)
recognition.start();

function onSpeak(e) {
    console.log(e.results[0][0].transcript)
    chute = e.results[0][0].transcript;
    exibirChuteTela(chute);
    verificarValor(chute);
}

const elementoChute = document.getElementById('chute');
function exibirChuteTela(chute) {
    elementoChute.innerHTML = 
    `
    <div>
        Você disse:    
    </div> 
    <span class="box">
         ${chute}
    </span> 
    `
}

recognition.addEventListener('end', () => {
    recognition.start();
})