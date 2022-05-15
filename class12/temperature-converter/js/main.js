const input = document.querySelector('#submitBtn');
const formInput = document.querySelector('#temp-input');
const output = document.querySelector('#temp-output');

let temp = document.querySelector('#temp-input').value;

formInput.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        return convertTemp();
    } else input.addEventListener("click", convertTemp);
});


function convertTemp(){
    let temp = document.querySelector('#temp-input').value;
    temp = (temp * 9/5) + 32;
    console.log(typeof temp)
    !isNaN(temp)? output.innerText = temp: output.innerText = 'Please enter a number';
}