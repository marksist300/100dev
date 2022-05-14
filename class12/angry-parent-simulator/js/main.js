document.querySelector('#screamBtn').addEventListener('click', scream)

function scream(){
  const fName = document.querySelector('#fName').value.toUpperCase();
  const secName = document.querySelector('#secName').value.toUpperCase();
  const surname = document.querySelector('#surname').value.toUpperCase();

  document.querySelector('#screamOutput').innerText = `${fName} ${secName} ${surname}, YOU'D BETTER GET HOME NOW!`
}