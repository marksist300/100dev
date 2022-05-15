//Create a conditonal that checks their age
const button = document.querySelector('h1')
const input = document.querySelector('#danceDanceRevolution');
const speak = document.querySelector('p');

    input.addEventListener('keypress', (e)=>{
        if(e.key ==='Enter'){
            e.preventDefault();
            checkAge()
        }
    }); button.addEventListener('click', checkAge);



function checkAge(){
    let age = Number(input.value);
    switch(true){
        case (age<16):
            speak.innerText = 'Can\'t drive';
            break;
        case (age<18):
            speak.innerText = 'Can\'t hate from outside the club';
            break;
        case (age<21):
            speak.innerText = 'Can\'t drink';
            break;
        case(age<25):
            speak.innerText = 'Can\t rent cars affordably';
            break;
        case(age<30):
            speak.innerText = 'Can\'t rent fancy cars affordably';
            break;
        case(age>=30):
            speak.innerText = 'Nothing left to look forward to';
            break;
    }
}
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
