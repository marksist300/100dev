const confirmButton = document.querySelector('#confirmButton');
const body = document.querySelector('body');
const video = document.querySelector('video');
const boxShadow = document.querySelector('.main-container').style

function textReturner (param) {
  return document.querySelector('#demoTextArea').innerText = param;
}


confirmButton.addEventListener('click', dayChecker);

function dayChecker(){
  const day = document.querySelector('#day').value;
  const CLASSDAYS = /(^Tuesday$)|(^Thursday$)/i;
  const BORINGDAYS = /(^Monday$)|(^Wednesday$)|(^Friday$)/i;
  const WEEKEND = /(^Saturday$)|(^Sunday$)/i;
  if(day.match(CLASSDAYS)){
     return goClass();
  } else if (day.match(WEEKEND)){
     return goWeekend();
  } day.match(BORINGDAYS)? goBoring(): noDay();
}



function goClass(){
    textReturner('Class day!')
    video.style.display ='block';
    boxShadow.boxShadow = 'none';
    confirmButton.remove();
}

function goBoring() {
  textReturner('Boring day!')
  body.classList.toggle('boring')
  boxShadow.boxShadow = 'none';
  confirmButton.remove();
}

function goWeekend() {
  textReturner('Oh, yeah, the Weekend!')
  body.className = 'weekend';
  boxShadow.boxShadow = 'none';
  confirmButton.remove();
}

function noDay() {
  textReturner('Nah, ain\'t no day I done heard of, son')
}