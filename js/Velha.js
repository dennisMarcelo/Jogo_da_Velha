//tudo que modificar o objeto velha vai aqui
export class Velha{
    constructor(){
        this.table = [ ['','',''], 
                       ['','',''], 
                       ['','',''] ];

        this.counter = this.counter || 0;
        this.srcWin = (e = this.table, c = this.counter) =>{
            //teste nas linhas horizontais
            if((e[0][0] !== '') && (e[0][0] === e[0][1]) && (e[0][1]) === e[0][2]  ){
                return true
            };
            if((e[1][0] !== '') && (e[1][0] === e[1][1]) && (e[1][1]) === e[1][2]  ){
                return true
            };
            if((e[2][0] !== '') && (e[2][0] === e[2][1]) && (e[2][1]) === e[2][2]  ){
                return true
            };

            //teste nas linhas verticas
            if((e[0][0] !== '') && (e[0][0] === e[1][0]) && (e[1][0]) === e[2][0]  ){
                return true
            };
            if((e[0][1] !== '') && (e[0][1] === e[1][1]) && (e[1][1]) === e[2][1]  ){
                return true
            };
            if((e[0][2] !== '') && (e[0][2] === e[1][2]) && (e[1][2]) === e[2][2]  ){
                return true
            };

            //teste na diagonal
            if((e[0][0] !== '') && (e[0][0] === e[1][1]) && (e[1][1]) === e[2][2]  ){
                return true
            };
            if((e[0][2] !== '') && (e[0][2] === e[1][1]) && (e[1][1]) === e[2][0]  ){
                return true
            }
            
            //nenhum ganhador
            if (c >= 9){
                return false
            }
             
        }
    }
    
}

 export function checkTable(e, currentPlayer, gameVelha){
    //pega o id e separa o X do Y
    let posit =  e.currentTarget.id
    let pX = posit.slice(1, 2)
    let pY = posit.slice(4, 5)

    gameVelha.table[pX][pY] = currentPlayer  //marca na matriz o valor atual
}