function alterarStatus(game) {
    let jogo = document.getElementById(`game-${game}`);
    let botao = jogo.querySelector('.dashboard__item__button');
    let imagem = jogo.querySelector('.dashboard__item__img');
    
    if(botao.textContent == 'Alugar'){
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    }else {
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
    }
}
