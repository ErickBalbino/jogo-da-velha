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
                if(jogo[0][0]){

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