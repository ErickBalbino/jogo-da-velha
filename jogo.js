let jogo = [];
let tabuleiro = [];
let quemJoga = 0;  //0 - Jogador | 1 - Máquina
let verificaVencedor;
let jogando = true;
let nivel = 1;
let jogadaMaquina = 1;
let quemComeca = 1;
let txtGanhador = document.getElementById("resultText");

function inicia(){
    jogando = true;
    txtGanhador.innerHTML = "";
    jogadaMaquina = 1;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca == 1){
        quemComeca = 0;
        quemJoga = quemComeca;
        messageStartGame = document.getElementById("dvStartGame")
        messageStartGame.innerHTML = "Quem começa: < JOGADOR >";
    }else{
        quemComeca = 1;
        document.getElementById("dvStartGame").innerHTML = `Quem começa: < MÁQUINA >`;
        maquinaJoga();
    }
}

window.addEventListener("load", inicia);



function jogar(p){
    if((jogando == true) && (quemJoga == 0)){
        switch(p){
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4: 
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if(jogo[1][2] == ""){
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;  
            case 7:
                if(jogo[2][0] == ""){
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if(jogo[2][1] == ""){
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 9:
                if(jogo[2][2] == ""){
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
        }
        atualizaTabuleiro();
        if(quemJoga == 1){
            verificaVencedor = verificaVitoria();
            if(verificaVencedor != ""){
                empate = 0;
                jogando = false;
                txtGanhador.innerHTML = `${verificaVencedor} GANHOU!`;
            }
            if((empate >= 9) && verificaVencedor == ""){
                txtGanhador.innerHTML="OPS, DEU VELHA!"
                jogando = false;
                empate = 0;
            }
            maquinaJoga();
        }
    }
}

function maquinaJoga(){
    if(jogando == true){  
        let l, c;
        if(nivel == 1){
            do{
                l = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }while(jogo[l][c] != "");
            jogo[l][c] = "O";
        }else if(nivel == 2){

        }
        atualizaTabuleiro();
        verificaVencedor = verificaVitoria();
        if(verificaVencedor != ""){
            empate = 0;
            txtGanhador.innerHTML = `${verificaVencedor} GANHOU!`;
            jogando = false;
        }
        if((empate >= 9) && verificaVencedor == ""){
                txtGanhador.innerHTML="OPS, DEU VELHA!"
                jogando = false;
                empate = 0;
            }
        quemJoga = 0;
    }
}

let empate = 0;

function verificaVitoria(){
    empate++;

    let l, c;
    // LINHA
    for(l = 0; l < 3; l++){
        if((jogo[l][0] == jogo[l][1])&&(jogo[l][1] == jogo[l][2])){
            return jogo[l][0];
        }
    }
    // COLUNAS
    for(c = 0; c < 3; c++){
        if((jogo[0][c] == jogo[1][c])&&(jogo[1][c] == jogo[2][c])){
            return jogo[0][c];
        }
    }
    // DIAGONAIS
    if((jogo[0][0] == jogo[1][1])&&(jogo[1][1] == jogo[2][2])){
        return jogo[0][0];
    }
    if((jogo[0][2] == jogo[1][1])&&(jogo[1][1] == jogo[2][0])){
        return jogo[0][2];
    }

    return "";
}

function atualizaTabuleiro(){
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(jogo[l][c] == "X"){
                tabuleiro[l][c].innerHTML = "X";
                tabuleiro[l][c].style.cursor = "default";
            }else if(jogo[l][c] == "O"){
                tabuleiro[l][c].innerHTML = "O";
                tabuleiro[l][c].style.cursor = "default";
            }else{
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

