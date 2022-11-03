function criarQuizz (item) {
    console.log (item)
    //leva para a tela 3.1; 
    const esconder = document.querySelector ('.entrada');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.criarQuizzConteudo');
    aparecer.classList.remove ('esconder');
}
function telaPerguntasQuiz (item) {
    console.log (item)
    //leva para a tela 3.2; 
    const esconder = document.querySelector ('.infoBasica');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.perguntasQuiz');
    aparecer.classList.remove ('esconder');
}
function telaNiveisQuiz (item) {
    console.log (item)
    //leva para a tela 3.3; 
    const esconder = document.querySelector ('.perguntasQuiz');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.niveisQuiz');
    aparecer.classList.remove ('esconder');
}
function telaSucessoQuiz (item) {
    console.log (item)
    //leva para a tela 3.4; 
    const esconder = document.querySelector ('.niveisQuiz');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.sucessoQuiz');
    aparecer.classList.remove ('esconder');
}
function retornarTelaPrincipal () {
    window.location.reload()
}



function abrirQuizz (item) {
    console.log (item)
    const esconder = document.querySelector ('.entrada');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.paginaQuizz');
    aparecer.classList.remove ('esconder');
}
function abrirCaixaBranca (){
    const esconder = document.querySelector ('.caixaBrancaReduzida');
    esconder.classList.add ('esconder');
    const aparecer = document.querySelector ('.caixaBranca');
    aparecer.classList.remove ('esconder');
}









//para cada um dos 4 quadrados do quizz, terá que ter uma função selecionarOpcao; 
function selecionarOpcao(respostaSelecionada) {
    console.log (respostaSelecionada);
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
    console.log (quiz.questions.title)
}