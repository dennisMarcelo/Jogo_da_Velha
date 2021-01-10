//tudo que modificar a tela do usuário vai aqui
//essa function tocra os displays e dasativa o botão q da inicio
function toggleDisplay(){
    let $gameScreen = document.getElementById('gameScreen')
    let $homeScreen = document.getElementById('homeScreen')
    
    $gameScreen.style.display = 'block';
    $homeScreen.style.display = 'none';
}

function showWinner(bool, gamer, obj){
    let $h1 = document.querySelector('#alertWinner h1');
    let $alertWinner = document.querySelector('#alertWinner');
    let $refresh = document.getElementById('refresh');
    
    if(bool){
        $h1.innerHTML = `O Jogador <strong>${gamer}</strong>, ganhou o jogo`;
        $alertWinner.style.display = 'block';
        center()
    }else if(obj.counter >= 9){
        $h1.innerHTML = "Deu Velha"
        $alertWinner.style.display = "block"
        center()
    }

    $refresh.addEventListener('click', e =>{location.reload()})
}