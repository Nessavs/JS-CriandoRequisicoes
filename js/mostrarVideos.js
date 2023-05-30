import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`
//estrutura chamada templates strings, colocoar variaveis atraves do ${}

return video;
}

async function listaVideos() {
    try { //tentar conectar com a api e exibir na tela
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch{ //caso der erro, vai mostrar isso nas chaves
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possível carregar a lista de videos!😞</h2>`
    }
}

listaVideos();
//sempre inicializar o terminal com: npx json-server --watch C:\Users\User\Documents\6-aluraplay-requisicoes-main\aluraplay-requisicoes-main\db.json