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



function abrirQuizz (item) {
    console.log (item);
    const esconder = document.querySelector ('.entrada');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.paginaQuizz');
    aparecer.classList.remove ('esconder');
    obterQuizzes(); 
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


    let textoPergunta1;
    let corPergunta1;
    let textoRespostaCorreta;
    let imagemRespostaCorreta;
    let textoRespostaIncorreta1;
    let imagemRespostaIncorreta1;
    let textoRespostaIncorreta2;
    let imagemRespostaIncorreta2;
    let textoRespostaIncorreta3;
    let imagemRespostaIncorreta3;



    arrayCaixasPerguntas.forEach (() => {
    textoPergunta1 = document.querySelector ('.textoPergunta1').value;
    corPergunta1 = document.querySelector ('.corPergunta1').value;


    textoRespostaCorreta = document.querySelector ('.textoRespostaCorreta').value;
    imagemRespostaCorreta = document.querySelector ('.imagemRespostaCorreta').value;
    textoRespostaIncorreta1 = document.querySelector ('.textoRespostaIncorreta1').value;
    imagemRespostaIncorreta1 = document.querySelector ('.imagemRespostaIncorreta1').value;
    textoRespostaIncorreta2 = document.querySelector ('.textoRespostaIncorreta2').value;
    imagemRespostaIncorreta2 = document.querySelector ('.imagemRespostaIncorreta2').value;
    textoRespostaIncorreta3 = document.querySelector ('.textoRespostaIncorreta3').value;
    imagemRespostaIncorreta3 = document.querySelector ('.imagemRespostaIncorreta3').value;
})

console.log (textoPergunta1);
console.log (corPergunta1);
console.log (textoRespostaCorreta);
console.log (imagemRespostaCorreta);
console.log (textoRespostaIncorreta1);
console.log (imagemRespostaIncorreta1);
console.log (textoRespostaIncorreta2);
console.log (imagemRespostaIncorreta2);
console.log (textoRespostaIncorreta3);
console.log (imagemRespostaIncorreta3);




    let arrayRespostasPergunta1 = [{text: textoRespostaCorreta, image: imagemRespostaCorreta, isCorrectAnswer: true },
        {text: textoRespostaIncorreta1, image: imagemRespostaIncorreta1, isCorrectAnswer: false },
        {text: textoRespostaIncorreta2, image: imagemRespostaIncorreta2, isCorrectAnswer: false },
        {text: textoRespostaIncorreta3, image: imagemRespostaIncorreta3, isCorrectAnswer: false }];
    
    
        let questoes = [{title: textoPergunta1, color: corPergunta1, answers: arrayRespostasPergunta1}];

        let quizAdicionado = {title: tituloDoQuiz, image: imagemDoQuiz, questions: questoes};
    
    

    console.log (arrayRespostasPergunta1);
    console.log (questoes);
    console.log (quizAdicionado)
    // respostas = [{texto, imagem, certa ou nao}]


    const resposta = axios.post ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizAdicionado);
    resposta.then (addQuizServidor);
}


//funcao para adicionar o quiz ao servidor; TELA 3
function addQuizServidor () {
    console.log ('Quiz adicionado')

}





























//para cada um dos 4 quadrados do quizz, terá que ter uma função selecionarOpcao; 
//variaveis globais;
let resposta1; 
let resposta2; 
let resposta3; 
let resposta4; 


////
function selecionarOpcao1(respostaSelecionada) {


    const todasOpcoes = document.querySelectorAll ('div .primeira');
    let opcao;
    for (let i = 0; i < todasOpcoes.length; i++) {
        opcao = todasOpcoes[i];
        opcao.classList.add ('ocultarResposta');
        if (respostaSelecionada !== null) {
            respostaSelecionada.classList.remove ('ocultarResposta')
        }
    }
    resposta1 = respostaSelecionada.querySelector ('.nomeOpcao').innerHTML
    sucessoQuiz();
}

function selecionarOpcao2(respostaSelecionada) {
    const todasOpcoes = document.querySelectorAll ('div .segunda');
    let opcao;
    for (let i = 0; i < todasOpcoes.length; i++) {
        opcao = todasOpcoes[i];
        opcao.classList.add ('ocultarResposta');
        if (respostaSelecionada !== null) {
            respostaSelecionada.classList.remove ('ocultarResposta')
        }
    }
    resposta2 = respostaSelecionada.querySelector ('.nomeOpcao').innerHTML;
    sucessoQuiz();
}

function selecionarOpcao3(respostaSelecionada) {
    const todasOpcoes = document.querySelectorAll ('div .terceira');
    let opcao;
    for (let i = 0; i < todasOpcoes.length; i++) {
        opcao = todasOpcoes[i];
        opcao.classList.add ('ocultarResposta');
        if (respostaSelecionada !== null) {
            respostaSelecionada.classList.remove ('ocultarResposta')
        }
    }
    resposta3 = respostaSelecionada.querySelector ('.nomeOpcao').innerHTML
    sucessoQuiz();
}

function selecionarOpcao4(respostaSelecionada) {
    const todasOpcoes = document.querySelectorAll ('div .quarta');
    let opcao;
    for (let i = 0; i < todasOpcoes.length; i++) {
        opcao = todasOpcoes[i];
        opcao.classList.add ('ocultarResposta');
        if (respostaSelecionada !== null) {
            respostaSelecionada.classList.remove ('ocultarResposta')
        }
    }
    resposta4 = respostaSelecionada.querySelector ('.nomeOpcao').innerHTML
    sucessoQuiz();
}
function sucessoQuiz () {
    const mostrarResultado = document.querySelector ('.caixaSucessoQuizz');
    if (resposta1 !== undefined) {
        if (resposta2 !== undefined) {
            if (resposta3 !== undefined) {
                if (resposta4 !== undefined) {
                    mostrarResultado.classList.remove ('esconder')
                }
            }
        }
    }
}












function erro () {
    alert ('Algo deu errado.')
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
    </li>`
    }
 /////////////////////
}



obterQuizzes2();
function obterQuizzes2 () {
    const obtencao = axios.get ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    obtencao.then (paginaDoQuiz);
    obtencao.catch (erro)
}



 // adicionando a aparencia do quiz; 
 function paginaDoQuiz (item) {
    console.log (item);
    const quizzes = item.data;
    console.log (quizzes);
    const arrComQuiz = [];
    for (let i = 0; i < quizzes.length; i++) {
        arrComQuiz.push (quizzes[i]);
    }
    console.log (arrComQuiz)
    const questoes = arrComQuiz.id;
    console.log (questoes)
    //const addAparenciaJogo = document.querySelector ('.conteudoQuizz');
    //const addCaixasPerguntas = document.querySelector ('.caixasPerguntasQuiz');
    //for (let i = 0; i < )
 }