function criarQuizz () {
    const esconderEntrada = document.querySelector ('.entrada');
    esconderEntrada.classList.add ('esconder');
    const telaCriarQuizz = document.querySelector ('.criarQuizzConteudo');
    telaCriarQuizz.classList.remove ('esconder');
}
function abrirQuizz (item) {
    console.log (item)
    const esconderEntrada = document.querySelector ('.entrada');
    esconderEntrada.classList.add ('esconder');
    const abrirQuizz = document.querySelector ('.paginaQuizz');
    abrirQuizz.classList.remove ('esconder');
}

//para cada um dos 4 quadrados do quizz, terá que ter uma função selecionarOpcao; 
function selecionarOpcao(respostaSelecionada) {
    console.log (respostaSelecionada);

}