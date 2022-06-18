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
console.log(player1Naughts.playersTurn)
console.log(player2Crosses.playersTurn)
const playerToggle = Array.from(document.querySelectorAll('.toggleSwitch'))
const squares = Array.from(document.querySelectorAll('.square'));


playerToggle.forEach(item=> item.addEventListener('change', e=>{
    if(e.target.checked === true && e.target.id === 'p1Toggle'){
        document.querySelector('#p2Toggle').checked = false
        player1Naughts.playersTurn = true;
        player2Crosses.playersTurn = false;
        console.log('p1:',player1Naughts.playersTurn)
        console.log('p2:',player2Crosses.playersTurn)

        console.log(e.target.checked, e.target.id)
    } else if (e.target.checked === true && e.target.id === 'p2Toggle'){
        document.querySelector('#p1Toggle').checked = false;
        player1Naughts.playersTurn = false;
        player2Crosses.playersTurn = true;
        console.log('p1:',player1Naughts.playersTurn)
        console.log('p2:',player2Crosses.playersTurn)
        console.log(e.target.checked, e.target.id)
    }
}))

squares.forEach(elem=> elem.addEventListener('click', e=>{
    console.log(e.target.id)
}))