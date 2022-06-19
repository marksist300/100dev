//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

const increment = document.querySelector('#increment');
const outputNum = document.querySelector('#total');
outputNum.innerText = localStorage.getItem('botScore');
increment.addEventListener('click', addOne);

function addOne(){
    let totalBotScore = localStorage.getItem('botScore');
    totalBotScore = Number(totalBotScore) + Number(1);
    localStorage.setItem('botScore', totalBotScore);
    outputNum.innerText = localStorage.getItem('botScore');
}

