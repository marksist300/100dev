class PlayerSelection{
    constructor(type, playersTurn){
        this.type = type;
        this.playersTurn = playersTurn;
    }
    playerSelects(squareID){
        document.squareID.innerContent = this.type;
    }
}

const player1Naughts = new PlayerSelection('O', true);
const player2Crosses = new PlayerSelection('X', false);
const playerToggle = Array.from(document.querySelectorAll('.player-selector'))
const squares = Array.from(document.querySelectorAll('.square'));

function switchPlayer(){
    if(player1Naughts.playersTurn === true){
        document.querySelector('#p2Toggle').checked = true
        document.querySelector('#p1Toggle').checked = false;
        player1Naughts.playersTurn = false;
        player2Crosses.playersTurn = true;
    } else if (player2Crosses.playersTurn === true){
        document.querySelector('#p1Toggle').checked = true;
        document.querySelector('#p2Toggle').checked = false
        player1Naughts.playersTurn = true;
        player2Crosses.playersTurn = false;
    }   
}

playerToggle.forEach(item=> item.addEventListener('click', switchPlayer))

squares.forEach(elem=> elem.addEventListener('click', e=>{
    playerToggle.forEach(player=> {
        if(e.target.innerText !== ''){
            return;
        } else if(player1Naughts.playersTurn === true ){
            e.target.innerText = player1Naughts.type;
            switchPlayer()
        } else if(player2Crosses.playersTurn === true){
            e.target.innerText = player2Crosses.type;
            switchPlayer()
        }
    });
}))