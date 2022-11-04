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

    console.log (tituloDoQuiz);
    console.log (imagemDoQuiz)
    console.log (numeroPerguntas);
    console.log (numeroNiveis);

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
    addQuizServidor ();

    const tituloQuiz = document.querySelector ('.tituloDoQuiz').value;
    const imagemQuiz = document.querySelector ('.imagemDoQuiz').value;
    const tituloSucessoQuizResultado = document.querySelector ('.tituloSucessoQuizResultado');
    const imgSucessoQuizResultado = document.querySelector ('.addImgResultado');
    tituloSucessoQuizResultado.innerHTML = tituloQuiz;
    imgSucessoQuizResultado.innerHTML = `<img class="imgSucessoQuizResultado" src="${imagemQuiz}" />`
}
function retornarTelaPrincipal () {
    window.location.reload()
}



function abrirQuizz (item) {
    const esconder = document.querySelector ('.entrada');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.paginaQuizz');
    aparecer.classList.remove ('esconder');
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




//para formação da TELA 3.2 
function addQtdPerguntas () {
    const qtddSelecionada = document.querySelector ('.qtddPerguntasQuiz').value
    let qtddDePerguntas = Number(qtddSelecionada);

    const addCaixas = document.querySelector ('.caixasBrancasListaPerguntas');
    addCaixas.innerHTML = '';
    for (let i = 0; i < qtddDePerguntas; i++) {
        addCaixas.innerHTML += `<li class="caixaBrancaReduzida CBRPerguntas esconder" onclick="abrirCaixaBrancaPerguntas(this)">
        <span class="manterEsquerda2">Pergunta ${(i + 1)}</span>
        <ion-icon class="iconeCriacao" name="create-outline"></ion-icon>
    </li>

    <li class="aparecerPerguntas caixaBranca"><div class="orientacaoEsquerda">Pergunta ${(i + 1)}</div>
    <input class="textoPergunta1" type="text" placeholder="Texto da pergunta" />
    <input class="corPergunta1" type="text" placeholder="Cor de fundo da pergunta" />
    <div class="orientacaoEsquerda">Resposta correta</div>
    <input class="textoRespostaCorreta" type="text" placeholder="Resposta correta" />
    <input class="imagemRespostaCorreta" type="text" placeholder="URL da imagem" />
    <div class="orientacaoEsquerda">Respostas incorretas</div>
    <input class="textoRespostaIncorreta1" type="text" placeholder="Resposta correta 1" />
    <input class="imagemRespostaIncorreta1" type="text" placeholder="URL da imagem 1" />

    <input class="textoRespostaIncorreta2" type="text" placeholder="Resposta correta 2" />
    <input class="imagemRespostaIncorreta2" type="text" placeholder="URL da imagem 2" />

    <input class="textoRespostaIncorreta3" type="text" placeholder="Resposta correta 3" />
    <input class="imagemRespostaIncorreta3" type="text" placeholder="URL da imagem 3" /></li>`;
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
    const tituloQuiz = document.querySelector ('.tituloDoQuiz').value;
    const imagemQuiz = document.querySelector ('.imagemDoQuiz').value;
    qtddPerguntasQuiz = Number(document.querySelector ('.qtddPerguntasQuiz').value);
    qtddNiveisQuiz = Number(document.querySelector ('.qtddNiveisQuiz').value);

    console.log (qtddPerguntasQuiz);
    console.log (qtddNiveisQuiz);
    

    const textoResposta1 = document.querySelector ('.textoRespostaCorreta').value;
    const imagemResposta1 = document.querySelector ('.imagemRespostaCorreta').value;

    const objetoDaResposta = {text: textoResposta1, image: imagemResposta1, isCorrectAnswer: true }; 
    // respostas = [{texto, imagem, certa ou nao}]
    const respostas = [
        {
            text: "Texto da resposta 1",
            image: "https://http.cat/411.jpg",
            isCorrectAnswer: true
        },
        {
            text: "Texto da resposta 2",
            image: "https://http.cat/412.jpg",
            isCorrectAnswer: false
        }
    ]












    const quizAdicionado = {
        title: tituloQuiz,
        image: imagemQuiz,
        questions: [
            {
                title: "Título da pergunta 1",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 2",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: "Título da pergunta 3",
                color: "#123456",
                answers: [
                    {
                        text: "Texto da resposta 1",
                        image: "https://http.cat/411.jpg",
                        isCorrectAnswer: true
                    },
                    {
                        text: "Texto da resposta 2",
                        image: "https://http.cat/412.jpg",
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: "Título do nível 1",
                image: "https://http.cat/411.jpg",
                text: "Descrição do nível 1",
                minValue: 0
            },
            {
                title: "Título do nível 2",
                image: "https://http.cat/412.jpg",
                text: "Descrição do nível 2",
                minValue: 50
            }
        ]
    }

    const resposta = axios.post ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', quizAdicionado);
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


    setTimeout(() => {
        const scroll = document.querySelectorAll ('.scroll');
    scroll.scrollIntoView();
    }, 2000);


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
}