const containerVideos = document.querySelector(".videos__container");

async function buscaMostrarVideos() {
    //"buscas os dados dentro da api"
    const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();
    try {
        videos.forEach(videos => {
            //"erros personalizados"
            if (videos.categoria == "") {
                throw new Error("Vídeo não tem categoria")
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${videos.url}" title="${videos.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${videos.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${videos.titulo}</h3>
                    <p class="titulo-canal">${videos.descricao}</p>
                    <p class="categoria" hidden>${videos.categoria}</p>
                </div>
            </li>
            `;
        })
    } catch (error) {
        containerVideos.innerHTML = `
        <p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    }
}
buscaMostrarVideos();

const barraPesquisa = document.querySelector(".pesquisar__input");

barraPesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");

    if (barraPesquisa.value != "") {
        //faz o for passar por todos os videos
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraPesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    } else {
        video.style.display = "block";
    }
}


const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarCategoria(nomeCategoria));
})

function filtrarCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if (!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
            video.style.display ="none";
        } else {
            video.style.display ="block";
        }
    }
}