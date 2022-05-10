// <li id="zero" class="list-item">Go to Zero</li>
// <li id="add4" class="list-item">Add 4</li>
// <li id="sub2" class="list-item">Subtract 2</li>
// <li id="addRandom" class="list-item">Add random</li>
// <li id="subRandom" class="list-item">Subtract random</li>
let total = 0;

document.querySelector('#zero').addEventListener('click', goZero)
document.querySelector('#add4').addEventListener('click', add4)
document.querySelector('#sub2').addEventListener('click', sub2)
document.querySelector('#addRandom').addEventListener('click', addRandom)
document.querySelector('#subRandom').addEventListener('click', subRandom)

function getRandomIntInclusive() {
  min = Math.ceil(1);
  max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function goZero(){
  total = 0;
  document.querySelector('#outputSpot').innerHTML = total;
}

function add4(){
  total +=4;
  document.querySelector('#outputSpot').innerText = total;
}

function sub2(){
  total -= 2;
  document.querySelector('#outputSpot').innerText = total
}

function addRandom(){
  total += getRandomIntInclusive();
  document.querySelector('#outputSpot').innerHTML = total;
}

function subRandom() {
  total -= getRandomIntInclusive();
  document.querySelector('#outputSpot').innerHTML = total;
}
