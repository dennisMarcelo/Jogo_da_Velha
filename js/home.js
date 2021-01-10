import { Velha } from './Velha.js'
import {checkTable} from './Velha.js'

window.addEventListener('load',function(){
    var gameVelha = new Velha;
    var currentPlayer;  //jogador atual
    var $td = document.querySelectorAll('td');
    var $btnStart = document.getElementById('btnStart');
    let winner;  //guarda ganhador

   //Inicia o jogo.
    $btnStart.addEventListener('click', ()=>{
        currentPlayer = firstPlayer()  //sorteia o primeiro jogador 
        toggleDisplay()
    });

    //cada td tem um evento.
    [...$td].forEach(x =>{
        x.addEventListener('click', function(e) {
            if (e.target.textContent === "" && (winner === undefined)){
                currentPlayer = togglePlayer(currentPlayer)
                
                e.target.innerHTML = currentPlayer //marca na tabela o valor atual
               
                checkTable(e, currentPlayer, gameVelha)
                gameVelha.counter++  

                winner = gameVelha.srcWin() 
                showWinner(winner, currentPlayer, gameVelha)
            }
        });
    });
});
