function criarQuizz () {
    const esconderEntrada = document.querySelector ('.entrada');
    esconderEntrada.classList.add ('esconder');
    const telaCriarQuizz = document.querySelector ('.criarQuizzConteudo');
    telaCriarQuizz.classList.remove ('esconder');
}