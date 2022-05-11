document.querySelector('#confirmButton').addEventListener('click', dayCheck);

// this function added for the last par tof the ternary operator to test its ability to make the syntax a little neater.
  const textReturner = (param) => {
    return document.querySelector('#demoTextArea').innerHTML = param;
  }

function dayCheck() {

    const lessonDay = /(Tuesday)|(Thursday)/i
    const weekend = /(Saturday)|(Sunday)/i
    const weekDay = /(Monday)|(Wednesday)|(Friday)/i
    const day = document.querySelector('#day').value;

  if(day.match(lessonDay)) {
    return textAddClassDay(), backgroundCodeClassDay(), boxShadowRemoval();
  } else if (day.match(weekend)){
    return textAddWeekend(), backgroundCodeWeekend();
  } day.match(weekDay)? textReturner('Boring day, son!'): textReturner('Ain\'t no day I\'ve ever heard of!')
}

// If lessonDay returns true the following functions run:
function textAddClassDay() {
return textReturner('Class Day!')
}

function backgroundCodeClassDay() {
  return document.querySelector('video').style.display = 'block'
}

function boxShadowRemoval() {
  document.querySelector('body').style.boxShadow = 'none'
}

// If day is a weekend the follow functions are invoked:
function textAddWeekend (){
  return textReturner('Weekend, yo!')
}

function backgroundCodeWeekend() {
  return document.querySelector('body').style.backgroundImage = " URL('./img/weekend.jpg')";
}