const formInput = document.querySelector('#temp-input');
const inputBtn = document.querySelector('#submitBtn');
const output = document.querySelector('#temp-output');

formInput.addEventListener('keypress', (e) => {
    if(e.key ==='Enter'){
        e.preventDefault();
        tempConverter();
    } else inputBtn.addEventListener('click', tempConverter);
});

function tempConverter(){
    let temp = document.querySelector('#temp-input').value;
    temp = (temp * 9/5) + 32;
    !isNaN(temp)? output.innerText = temp: output.innerText = 'Please enter a Number'
}