const body = document.querySelector('body');

document.querySelector('#happy').addEventListener('click', happyBG);
document.querySelector('#sad').addEventListener('click', sadBG);
document.querySelector('#panic').addEventListener('click', panicBG);
document.querySelector('#peace').addEventListener('click', peaceBG);

function happyBG() {
  if(body.className !== 'happy') {
    body.className = '';
    body.classList.toggle('happy');
  } else body.classList.toggle('happy');
}

function sadBG() {
  if(body.className !== 'sad' ) {
    body.className = '';
    body.classList.toggle('sad');
  } else body.classList.toggle('sad');
}

function panicBG() {
  if(body.className !== 'panic') {
    body.className = '';
    body.classList.toggle('panic');
  } else body.classList.toggle('panic');
}

function peaceBG() {
  if(body.className !== 'peace') {
    body.className = ''
    body.classList.toggle('peace')
  } else body.classList.toggle('peace')
}