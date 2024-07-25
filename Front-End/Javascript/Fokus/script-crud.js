const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');
const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');

// seleciona uma tag HTML atraves de um id ou class
const ulTarefas = document.querySelector('.app__section-task-list');

// JSON.parse() transforma o json de string para objeto
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
    // o JSON.stringify transforma o json de objeto para string
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    // adiciona um class ao elemento
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');
    // adiciona um texto dentro da tag funcionando parecido com o innerHTML mas sem as propiedades de usar tags
    paragrafo.textContent = tarefa.descricao;

    // cria um novo elemento HTML
    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');
    const imgBotao = document.createElement('img');

    botao.onclick = () => {
        const novadescricao = prompt('Insira a nova tarefa');
        if (novadescricao) {
            paragrafo.textContent = novadescricao;
            tarefa.descricao = novadescricao;
            atualizarTarefas();
        } else {
            alert("Atualização cancelada ou valor inválido!")
        }
    }

    // atribui algo para o elemento neste caso src='./imagens/edit.png' na tag img
    imgBotao.setAttribute('src', './imagens/edit.png');
    botao.append(imgBotao);

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        botao.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active').forEach(elemento => {
                elemento.classList.remove('app__section-task-list-item-active')
            })
            if (tarefaSelecionada === tarefa) {
                paragrafoDescricaoTarefa.textContent = '';
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return
            }

            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            paragrafoDescricaoTarefa.textContent = tarefa.descricao;
            li.classList.add('app__section-task-list-item-active')
        }
    }


    // append() encaixa um elemento HTML criado dentro do outro
    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    return li;
}

btnAdicionarTarefa.addEventListener('click', () => {
    // altera a classe do elemento a colocando ou tirando
    formAdicionarTarefa.classList.toggle('hidden')
})

//adiciona um evento em alguma tag ou função
formAdicionarTarefa.addEventListener('submit', (event) => {
    // tira o evento padrão já pre estabelecido, nesse caso do submit ele para de atualizar a pagina
    event.preventDefault();
    const tarefa = {
        descricao: textArea.value
    }

    //insere algo dentro de um array
    tarefas.push(tarefa);

    //Adiciona automaticamente os itens na tela 
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);

    atualizarTarefas();
    //deixa a area do texto vazia
    textArea.value = '';

    formAdicionarTarefa.classList.add('hidden');
})

// ação que permite executar uma função para cada elemento, sejam eles arrays simples ou de objetos, assim nessa função puxa os itens salvos no localStorage os mostrando na tela
tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
});

const limparFormulario = () => {
    formAdicionarTarefa.classList.add('hidden');
    textArea.value = '';
}
btnCancelar.addEventListener('click', limparFormulario);

document.addEventListener('focoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled');

        tarefaSelecionada.completa = true;
        atualizarTarefas();
    }
})

const removerTarefas = (somenteCompletas) => {
    const seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item";
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove();
    }) 
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    atualizarTarefas();
}

btnRemoverConcluidas.onclick = () => removerTarefas(true);
btnRemoverTodas.onclick = () => removerTarefas(false);