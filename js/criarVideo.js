import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); //tras numero aleatorio entre 0 e 1, para transformar em inteiro x10
    try{ //tentar criar o video na página
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
    }catch(e) { //pega o erro
        alert(e); // a letra "e" puxa a mensagem que foi jogada no throw new Error da conectaApi, aparece como um alerta
    }
    // Para lidarmos com erros nas promises, geradas em funções assíncronas como requisições, podemos utilizar o try e o catch na função. Agora, a interpretação funciona como: tente/try fazer o que está dentro do try, caso não consiga ele irá pegar/catch, detectar e imprimir uma frase dentro do alert().
}
formulario.addEventListener("submit", evento => criarVideo(evento)); //fofoqueiro