import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

        if (busca.length == 0) { //se o tamanho da lista for igual a 0, vai aparecer a mensagem na tela
            lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo 😥</h2>`
        }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))

//sempre inicializar o terminal com: npx json-server --watch C:\Users\User\Documents\6-aluraplay-requisicoes-main\aluraplay-requisicoes-main\db.json