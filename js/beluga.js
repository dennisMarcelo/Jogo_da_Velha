function sortear(x){
    return Math.round(Math.random(x)*x);
}

//seleciona o primeiro jogador
function firstPlayer(){
    return (sortear(1) === 0)? "O" : "X"
}
//troca player
function togglePlayer($cPlayer){
    return ($cPlayer === "O")? "X" : "O"
}
