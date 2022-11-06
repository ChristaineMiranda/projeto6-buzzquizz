///variaveis globais; 
let qtddPerguntasQuiz;
let qtddNiveisQuiz;


///
function criarQuizz (item) {
    //leva para a tela 3.1; 
    const esconder = document.querySelector ('.entrada');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.criarQuizzConteudo');
    aparecer.classList.remove ('esconder');
}
function telaPerguntasQuiz (item) {

    const tituloDoQuiz = document.querySelector ('.tituloDoQuiz').value;
    const imagemDoQuiz = document.querySelector ('.imagemDoQuiz').value;
    qtddPerguntasQuiz = document.querySelector ('.qtddPerguntasQuiz').value;
    qtddNiveisQuiz = document.querySelector ('.qtddNiveisQuiz').value;

    let numeroPerguntas = Number (qtddPerguntasQuiz);
    let numeroNiveis = Number (qtddNiveisQuiz);


    if (!tituloDoQuiz && !imagemDoQuiz && !numeroPerguntas && !numeroNiveis) {
        return; 
    } else {
        //leva para a tela 3.2; 
    const esconder = document.querySelector ('.infoBasica');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.perguntasQuiz');
    aparecer.classList.remove ('esconder');
    addQtdPerguntas();
    addQtdNiveis ();
    }
}
function telaNiveisQuiz (item) {
    //leva para a tela 3.3; 
    const esconder = document.querySelector ('.perguntasQuiz');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.niveisQuiz');
    aparecer.classList.remove ('esconder');
}
function telaSucessoQuiz (item) {
    postQuizCriado();
    //leva para a tela 3.4; 
    const esconder = document.querySelector ('.niveisQuiz');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.sucessoQuiz');
    aparecer.classList.remove ('esconder');

    const tituloQuiz = document.querySelector ('.tituloDoQuiz').value;
    const imagemQuiz = document.querySelector ('.imagemDoQuiz').value;
    const tituloSucessoQuizResultado = document.querySelector ('.tituloSucessoQuizResultado');
    const imgSucessoQuizResultado = document.querySelector ('.resultadoCompleto');
    tituloSucessoQuizResultado.innerHTML = tituloQuiz;
    imgSucessoQuizResultado.innerHTML += `<img class="imgSucessoQuizResultado" src="${imagemQuiz}" />`
}
function retornarTelaPrincipal () {
    window.location.reload()
}



function abrirCaixaBrancaPerguntas (){
    const esconder = document.querySelector ('.CBRPerguntas');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.aparecerPerguntas');
    aparecer.classList.remove ('esconder');
    document.querySelector(".caixaBrancaReduzida").removeAttribute("onclick");
}
function abrirCaixaBrancaNiveis (){
    const esconder = document.querySelector ('.CBRNiveis');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.aparecerNivel');
    aparecer.classList.remove ('esconder');
}


let arrayCaixasPerguntas;

//para formação da TELA 3.2 
function addQtdPerguntas () {
    const qtddSelecionada = document.querySelector ('.qtddPerguntasQuiz').value
    let qtddDePerguntas = Number(qtddSelecionada);

    arrayCaixasPerguntas = [];

    const addCaixas = document.querySelector ('.caixasBrancasListaPerguntas');
    addCaixas.innerHTML = '';
    for (let i = 0; i < qtddDePerguntas; i++) {
        addCaixas.innerHTML += `<li class="caixaBrancaReduzida CBRPerguntas esconder" onclick="abrirCaixaBrancaPerguntas(this)">
        <span class="manterEsquerda2">Pergunta ${(i + 1)}</span>
        <ion-icon class="iconeCriacao" name="create-outline"></ion-icon>
    </li>

    <li class="aparecerPerguntas caixaBranca pergunta${(i + 1)}"><div class="orientacaoEsquerda">Pergunta ${(i + 1)}</div>
    <input class="textoPergunta${(i + 1)} posicao${(i + 1)}" type="text" placeholder="Texto da pergunta" />
    <input class="corPergunta${(i + 1)} posicao${(i + 1)}" type="text" placeholder="Cor de fundo da pergunta" />
    <div class="orientacaoEsquerda">Resposta correta</div>
    <input class="textoRespostaCorreta posicao${(i + 1)}" type="text" placeholder="Resposta correta" />
    <input class="imagemRespostaCorreta posicao${(i + 1)}" type="text" placeholder="URL da imagem" />
    <div class="orientacaoEsquerda">Respostas incorretas</div>
    <input class="textoRespostaIncorreta1 posicao${(i + 1)}" type="text" placeholder="Resposta incorreta 1" />
    <input class="imagemRespostaIncorreta1 posicao${(i + 1)}" type="text" placeholder="URL da imagem 1" />

    <input class="textoRespostaIncorreta2 posicao${(i + 1)}" type="text" placeholder="Resposta incorreta 2" />
    <input class="imagemRespostaIncorreta2 posicao${(i + 1)}" type="text" placeholder="URL da imagem 2" />

    <input class="textoRespostaIncorreta3 posicao${(i + 1)}" type="text" placeholder="Resposta incorreta 3" />
    <input class="imagemRespostaIncorreta3 posicao${(i + 1)}" type="text" placeholder="URL da imagem 3" /></li>`;
    arrayCaixasPerguntas.push (`${addCaixas.innerHTML}`);
}
}

//para formação da TELA 3.3 
function addQtdNiveis () {
    const qtddSelecionada = document.querySelector ('.qtddNiveisQuiz').value
    let qtddDeNiveis = Number(qtddSelecionada);

    const addCaixas = document.querySelector ('.caixasBrancasListaNiveis');
    addCaixas.innerHTML = '';
    for (let i = 0; i < qtddDeNiveis; i++) {
        addCaixas.innerHTML += `<li class="caixaBrancaReduzida CBRNiveis esconder" onclick="abrirCaixaBrancaNiveis(this)">
        <span class="manterEsquerda2">Nível ${(i + 1)}</span>
        <ion-icon class="iconeCriacao" name="create-outline"></ion-icon>
    </li>

    <li class="aparecerNivel caixaBranca">
        <div class="orientacaoEsquerda">Nível ${(i + 1)}</div>
        <input type="text" placeholder="Título do nível" />
        <input type="text" placeholder="% de acerto mínima" />

        <input type="text" placeholder="URL da imagem do nível" />
        <input type="text" placeholder="Descrição do nível" />
    </li>`;
}

}


function postQuizCriado () {

    
    console.log (arrayCaixasPerguntas);
    qtddPerguntasQuiz = Number(document.querySelector ('.qtddPerguntasQuiz').value);
    qtddNiveisQuiz = Number(document.querySelector ('.qtddNiveisQuiz').value);

    console.log (qtddPerguntasQuiz);
    console.log (qtddNiveisQuiz);


    let tituloDoQuiz = document.querySelector ('.tituloDoQuiz').value;
    let imagemDoQuiz = document.querySelector ('.imagemDoQuiz').value;

    let textoPergunta1 = document.querySelector ('.textoPergunta1').value;
    let corPergunta1 = document.querySelector ('.corPergunta1').value;


    let textoRespostaCorreta = document.querySelector ('.textoRespostaCorreta').value;
    let imagemRespostaCorreta = document.querySelector ('.imagemRespostaCorreta').value;
    let textoRespostaIncorreta1 = document.querySelector ('.textoRespostaIncorreta1').value;
    let imagemRespostaIncorreta1 = document.querySelector ('.imagemRespostaIncorreta1').value;
    let textoRespostaIncorreta2 = document.querySelector ('.textoRespostaIncorreta2').value;
    let imagemRespostaIncorreta2 = document.querySelector ('.imagemRespostaIncorreta2').value;
    let textoRespostaIncorreta3 = document.querySelector ('.textoRespostaIncorreta3').value;
    let imagemRespostaIncorreta3 = document.querySelector ('.imagemRespostaIncorreta3').value;
       
    let quizAdicionado = {title: tituloDoQuiz, image: imagemDoQuiz, questions: [], levels: []};
    
    console.log (textoPergunta1)
    console.log (corPergunta1)
    console.log (quizAdicionado)
    console.log (textoRespostaCorreta)
    console.log (imagemRespostaCorreta)
    console.log (textoRespostaIncorreta1)
    console.log (imagemRespostaIncorreta1)
    console.log (textoRespostaIncorreta2)
    console.log (imagemRespostaIncorreta2)
    console.log (textoRespostaIncorreta3)
    console.log (imagemRespostaIncorreta3)
    console.log (quizAdicionado)
    // respostas = [{texto, imagem, certa ou nao}]


    const resposta = axios.post ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizAdicionado);
    resposta.then (addQuizServidor);
}


//funcao para adicionar o quiz ao servidor; TELA 3
function addQuizServidor () {
    console.log ('Quiz adicionado')

}



















function erro (item) {
    console.log (item);
    console.log ('algo deu errado');
}


obterQuizzes();
function obterQuizzes () {
    const obtencao = axios.get ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    obtencao.then (atualizarQuizzes);
    obtencao.catch (erro)
}



function atualizarQuizzes (itens) {
    //adicionando quiz na lista;
    const quizzes = itens.data;
    let addListaQuizzes = document.querySelector ('.listaQuizzes');
    addListaQuizzes.innerHTML = '<span class="manterEsquerda">Todos os Quizzes</span>';
    let quiz; 
    
    for (let i = 0; i < quizzes.length; i++) {
        quiz = quizzes[i];
            addListaQuizzes.innerHTML += `<li class="quizz" onclick="abrirQuizz(this)">
            <img class="imgQuizz" src="${quiz.image}" />
            <div class="nomeQuizz">${quiz.title}</div>
            <div class="id">${quiz.id}</div>
        </li>`    
    }
 /////////////////////
}


let idDoQuizSelecionado; 
function abrirQuizz (item) {

   const esconder = document.querySelector ('.entrada');
   esconder.classList.add ('esconder');
   const aparecer = document.querySelector ('.paginaQuizz');
   aparecer.classList.remove ('esconder');

   idDoQuizSelecionado = item.querySelector ('.id').innerHTML;

   const obtencao = axios.get (`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idDoQuizSelecionado}`);
    obtencao.then (paginaDoQuiz);
    obtencao.catch (erro2)
}
function jogarDeNovo (item) {
    const obtencao = axios.get (`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${item}`);
    obtencao.then (paginaDoQuiz);
    obtencao.catch (erro2)
}





function erro2 (item) {
    console.log (item);
    console.log ('erro de receber quiz específico');
}


let qtsPerguntas; 
function sucessoQuiz () {
    const mostrarResultado = document.querySelector ('.fimDeJogo');
    qtsPerguntas = document.querySelectorAll ('.caixaPerguntaQuizz')

    if (qtsPerguntas.length == contador) {
        mostrarResultado.classList.remove ('esconder'); 
        calcularResultado(); 
    }
}








//variaveis globais;
let resposta; 
let contador = 0; 
let contadorResposta = 0; 
let pontuacao = 0; 
let niveisQuiz;
////



 // adicionando a aparencia do quiz; 
 function paginaDoQuiz (item) {
    const quiz = item.data;
    let indice = 0;
    //const addAparenciaJogo = document.querySelector ('.conteudoQuizz');

    const addCaixasPerguntas = document.querySelector ('.caixasPerguntasQuiz');
    const addApresentacaoQuiz = document.querySelector ('.conteudoQuizz');
    addCaixasPerguntas.innerHTML = '';

    const tituloQuiz = quiz.title;
    const imagemQuiz = quiz.image;
    const questoesQuiz = quiz.questions;
    

    addApresentacaoQuiz.innerHTML = `<img class="imgPaginaQuizz" src="${imagemQuiz}" />
<div class="escurecerImg">escurecerImg</div>
<div class="nomePaginaQuizz"><h1>${tituloQuiz}</h1></div>`;


    for (let i = 0; i < questoesQuiz.length; i++) {
        contadorResposta++;
        let questao = questoesQuiz[i];
        //questoes = title, color e answers; 
        let questaoTitulo = questao.title;
        let questaoCor = questao.color;
        addCaixasPerguntas.innerHTML += `<div class="caixaPerguntaQuizz">
<div class="caixaPergunta" style="background-color:${questaoCor}"><span class="pergunta">${questaoTitulo}</span></div>
<div class="opcoes">
        <div class="opcoesEsquerda essaEsquerda${indice + 1}"></div>
        <div class="opcoesDireita essaDireita${indice + 1}"></div>
</div>
<div class="filtro esconderCaixa${contadorResposta} esconder"></div>
<div class="scroll posicao${contadorResposta}">oi</div>
</div>`;



        let addOpcoesJogoEsquerda = document.querySelector (`.essaEsquerda${indice + 1}`);
        let addOpcoesJogoDireita = document.querySelector (`.essaDireita${indice + 1}`);
        let removerEssaEsq = document.querySelector (`.opcoesEsquerda`);
        let removerEssaDir = document.querySelector (`.opcoesDireita`);


        let respostasEmbaralhar = questao.answers; 
        let respostas = respostasEmbaralhar.sort (misturar);
        for (let x = 0; x < respostas.length; x++) {
            

            removerEssaEsq.classList.remove (`essaEsquerda${indice + 1}`);
            removerEssaDir.classList.remove(`essaDireita${indice + 1}`);
                if (x == 0 || x == 2) {
                    
                    addOpcoesJogoEsquerda.innerHTML += `<div class="opcao selecionar${contadorResposta} result${respostas[x].isCorrectAnswer}" onclick="selecionarOpcao(this)">
                    <img class="imgOpcao" src="${respostas[x].image}" />
                    <div class="nomeOpcao result${respostas[x].isCorrectAnswer}">${respostas[x].text}</div>
                    <div class="resultado">${respostas[x].isCorrectAnswer}</div>
                </div>`;
                } else if (x == 1 || x == 3) {
                
                    addOpcoesJogoDireita.innerHTML += `<div class="opcao selecionar${contadorResposta} result${respostas[x].isCorrectAnswer}" onclick="selecionarOpcao(this)">
                    <img class="imgOpcao" src="${respostas[x].image}" />
                    <div class="nomeOpcao result${respostas[x].isCorrectAnswer}">${respostas[x].text}</div>
                    <div class="resultado">${respostas[x].isCorrectAnswer}</div>
                </div>`;
        }
        indice++
    }

}
    niveisQuiz = quiz.levels;
    console.log (niveisQuiz);

 }






//LISTAS DE COISAS PRINCIPAIS QUE FALTAM FAZER
//enviar objeto ao servidor; resultado
//salvar objeto dentro da lista e dentro do 'meus quizzes';


function selecionarOpcao(respostaSelecionada) {
    contador++;

    const todasOpcoes = document.querySelectorAll (`.selecionar${contador}`);

    let addCorCerta = document.querySelectorAll (`.selecionar${contador} .resulttrue`);
    let addCorErrada = document.querySelectorAll (`.selecionar${contador} .resultfalse`);
    
    let opcao;



    for (let i = 0; i < todasOpcoes.length; i++) {
        opcao = todasOpcoes[i];
        opcao.classList.add ('ocultarResposta');
        if (respostaSelecionada !== null) {
            respostaSelecionada.classList.remove ('ocultarResposta')
            resposta = respostaSelecionada.querySelector ('.resultado').innerHTML;
        }
    
    }    

        for (let certa = 0; certa < addCorCerta.length; certa++) {
            addCorCerta[certa].classList.add ('certa');
        }
        for (let errada = 0; errada < addCorErrada.length; errada++) {
            addCorErrada[errada].classList.add ('errada');
        }



    setTimeout(() => {
        const esconderCaixa  = document.querySelector (`.esconderCaixa${contador}`);
        esconderCaixa.classList.remove ('esconder');     
        let scroll = document.querySelector (`.posicao${contador}`);
        scroll.scrollIntoView ();    
    }, 1000);


    if (respostaSelecionada.classList.contains (`resulttrue`)) {
        pontuacao++;
        sucessoQuiz();
    } else {
        sucessoQuiz();
    }

}

let resultado; 
function calcularResultado () {
    resultado = (100 * pontuacao) / Number(qtsPerguntas.length);

const addResultadoQuiz = document.querySelector ('.caixaSucessoQuizz');
    addResultadoQuiz.innerHTML = '';

    for (let k = 0; k < niveisQuiz.length; k++) {
        if (niveisQuiz[k].minValue <= (Math.ceil (resultado))) {
            addResultadoQuiz.innerHTML = `<div class="caixaVermelhaResultado">${Math.ceil(resultado)}% de acerto: ${niveisQuiz[k].title}</div>
        <div class="conteudoResultado">
            <div class="imagemResultado"><img class="imgResultadoFinal" src="${niveisQuiz[k].image}" /></div>
            <div class="textoResultado">${niveisQuiz[k].text}</div>
        </div>`;    
        } else if (niveisQuiz[k].minValue >= (Math.ceil (resultado))) {
            addResultadoQuiz.innerHTML = `<div class="caixaVermelhaResultado">${Math.ceil(resultado)}% de acerto: ${niveisQuiz[k].title}</div>
        <div class="conteudoResultado">
            <div class="imagemResultado"><img class="imgResultadoFinal" src="${niveisQuiz[k].image}" /></div>
            <div class="textoResultado">${niveisQuiz[k].text}</div>
        </div>`;
        }
    }
    
}



function misturar () {
    return Math.random () - 0.5; 
}




function reiniciarQuiz () {
    console.log ('reiniciar quiz')
    let scroll2 = document.querySelector (`.imgPaginaQuizz`);
    scroll2.scrollIntoView (); 
    
    localStorage.setItem ('idJogarDeNovo', `${idDoQuizSelecionado}`);
    const jogarDeNovoNovamente = localStorage.getItem ('idJogarDeNovo');
    
    contador = 0; 
    contadorResposta = 0; 
    pontuacao = 0; 
    resultado = 0;


    const esconderResultado = document.querySelector ('.fimDeJogo');
        esconderResultado.classList.add ('esconder'); 

    jogarDeNovo(jogarDeNovoNovamente)
}