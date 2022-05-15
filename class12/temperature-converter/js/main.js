const input = document.querySelector('#temp-input');
const output = document.querySelector('#temp-output');
const submitBtn = document.querySelector('#submitBtn');

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        tempConverter();
    } else submitBtn.addEventListener('click', tempConverter)
});

function tempConverter(){
    let temp = input.value;
    temp = (temp * 9/5) + 32;
    !isNaN(temp)? output.innerText = temp: output.innerText = 'Please enter a number'
}















