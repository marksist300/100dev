// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = 'CokeZero'
console.log(drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWords = 'This is a string of multiple words'
console.log(multiWords.search('apple'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
    const RockPaperScissors = () => {
        let randomDigit = Math.random()
        if(randomDigit<=0.33) return 'rock'
        if(randomDigit >0.33 && randomDigit<=0.66) return 'paper'
        return 'scissors'
    }
    // console.log(RockPaperScissors())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function UserPlaysRPS(Guess){
    const computerGuess = RockPaperScissors();
    const playerGuess = Guess.toLowerCase();
    if(computerGuess === playerGuess) return 'Draw!';
    if(computerGuess === 'rock' && playerGuess === 'paper') return 'Player Wins!';
    if(computerGuess === 'rock' && playerGuess === 'scissors') return 'Computer Wins!';
    if(computerGuess === 'scissors' && playerGuess === 'rock') return 'Player Wins!';
    if(computerGuess === 'scissors' && playerGuess === 'paper') return 'Computer Wins!';
    if(computerGuess === 'paper' && playerGuess === 'scissors') return 'Player Wins!';
    if(computerGuess === 'paper' && playerGuess === 'rock') return 'Computer Wins!'
    return 'Error with selection';

}

// console.log(UserPlaysRPS('Scissors'))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function multiChoiceRPS (array) {
    let counter = 0;
    while(counter< array.length) {
        console.log(UserPlaysRPS(choices[counter]));
        counter++;
    }
}

let choices = ['rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'scissors']

console.log(multiChoiceRPS(choices))