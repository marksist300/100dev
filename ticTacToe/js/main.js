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
const playerToggle = Array.from(document.querySelectorAll('.toggleSwitch'))
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

playerToggle.forEach(item=> item.addEventListener('change', e=>{
    if(e.target.checked === true && e.target.id === 'p1Toggle'){
        switchPlayer()
        console.log('p1',player1Naughts.playersTurn)
        console.log('p2',player2Crosses.playersTurn)
    } else if (e.target.checked === true && e.target.id === 'p2Toggle'){
        switchPlayer()
        console.log('p1',player1Naughts.playersTurn)
        console.log('p2',player2Crosses.playersTurn)
    }
}))

squares.forEach(elem=> elem.addEventListener('click', e=>{
    console.log(e.target.id)
    playerToggle.forEach(player=> {
        if(player1Naughts.playersTurn === true){
            console.log(e.target)
            e.target.innerText = player1Naughts.type;
            console.log(player1Naughts.type)
            console.log('p1',player1Naughts.playersTurn)
            console.log('p2',player2Crosses.playersTurn)
        } else if(player2Crosses.playersTurn === true){
            console.log(e.target)
            e.target.innerText = player2Crosses.type;
            console.log('p1',player1Naughts.playersTurn)
            console.log('p2',player2Crosses.playersTurn)
        }
    })
    switchPlayer()

}))