var jogo = [];
var tabuleiro = [];
var quemJoga = 0;  //0 - Jogador | 1 - Máquina
var verificaVencedor;
var jogando = true;
var nivel = 1;
var jogadaMaquina = 1;
var quemComeca = 1;

function jogar(p){
    if((jogando) && (quemJoga == 1)){
        switch(p){
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X"
                }
            break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X";
                }
            break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X";
                }
            break;
            case 4: 
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    
                }
            break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X";
                }
                
        }
    }
}

function iniciarJogo(){
    var jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
}

window.addEventListener("load", iniciarJogo);