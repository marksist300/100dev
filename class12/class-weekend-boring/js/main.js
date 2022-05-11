// All written out multiple times, rather than just declaring variables, as I wanted to practice and repeat the syntax.

document.querySelector('#confirmButton').addEventListener('click', dayCheck);

// this function added for the last part of the ternary operator to test its ability to make the syntax /// a little neater.
  const textReturner = (param) => {
    return document.querySelector('#demoTextArea').innerHTML = param;
  }

function removal() {
  return document.querySelector('#confirmButton').remove();
}

function dayCheck() {

    const lessonDay = /(^Tuesday$)|(^Thursday$)/i;
    const weekend = /(^Saturday$)|(^Sunday$)/i;
    const weekDay = /(^Monday$)|(^Wednesday$)|(^Friday$)/i;
    const day = document.querySelector('#day').value;

  if(day.match(lessonDay)) {
    return classDay();
  } else if (day.match(weekend)){
    return theWeekend();
  } day.match(weekDay)? boringDay(): noDay();;
};

// If lessonDay returns true the following function runs:
function classDay() {
 textReturner('Class Day!');
 document.querySelector('video').style.display = 'block';
 document.querySelector('.main-container').style.boxShadow = 'none';
 document.querySelector('#confirmButton').remove();
};

// If day is a weekend the follow function is invoked:
function theWeekend(){
  textReturner('Weekend, yo!');
  document.querySelector('body').style.backgroundImage = " URL('./img/weekend.jpg')";
  document.querySelector('body').style.backgroundSize = '50% 65vw';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundPositionX = '50%';
  document.querySelector('.main-container').style.boxShadow = 'none';
  document.querySelector('#confirmButton').remove();
  if(document.querySelector('video').style.display == 'block') {
    document.querySelector('video').style.display = 'none'
  };
};

//so called 'Boring day' or the fall back of not a day.
function boringDay() {
  textReturner('Boring day, son!');
  document.querySelector('body').style.backgroundImage = "URL('./img/boring.jpg')";
  document.querySelector('body').style.backgroundSize = '50% 65vw';
  document.querySelector('body').style.backgroundRepeat = 'no-repeat';
  document.querySelector('body').style.backgroundPositionX = '50%';
  document.querySelector('.main-container').style.boxShadow = 'none';
  document.querySelector('#confirmButton').remove();
  if(document.querySelector('video').style.display == 'block') {
    document.querySelector('video').style.display = 'none'
  };
};
function noDay() {
  textReturner('Ain\'t no day I\'ve ever heard of!')
  if(document.querySelector('video').style.display == 'block') {
    document.querySelector('video').style.display = 'none'
  } document.querySelector('body').style.backgroundImage = ''
};
