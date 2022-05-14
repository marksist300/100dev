//enter a day of the week
//receive the value
//check value against regex
// change the background image according to the day of the week
//output text based on day of the week


const confirmButton = document.querySelector('#confirmButton');
const body = document.querySelector('body');
const video = document.querySelector('video');

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
    confirmButton.remove()
}

function goBoring() {
  textReturner('Boring day!')
  body.classList.toggle('boring')
  confirmButton.remove()
}

function goWeekend() {
  textReturner('Oh, yeah, the Weekend!')
  body.className = 'weekend'
  confirmButton.remove()
}

function noDay() {
  textReturner('Nah, ain\'t no day I done heard of, son')
}