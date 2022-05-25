// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let day = 'Monday';
day = 'Summer'
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let googler = 'googler';
console.log(googler.slice(4,))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const subAHundred = function (){
    let hundred = 100;
    let args = Array.from(arguments);
    args.forEach(num => hundred -= num)
    return hundred;
}

console.log(subAHundred(10,10,10,10, 10))
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const lowAndHigh = function (num1, num2, num3) {
    console.log(Math.min(num1, num2, num3));
    console.log(Math.max(num1, num2, num3));
}
    console.log(lowAndHigh(4,20,40))
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTails() {
    if (Math.random() <0.5) {
        console.log('Heads');
    } else console.log('Tails')
}

// headOrTails()
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function loopHeadsOrTails(calls){
    while (calls >0){
        headOrTails();
        calls -= 1;
    }
}
loopHeadsOrTails(0)
