//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [4,7,9,14,10];
alert(numbers.reduce((acc,num)=> acc+=num))
//Create a function that takes in an array of numbers
function squaredArray(array) {
    return array.map(num=> num*num, [])
}

console.log(squaredArray(numbers))
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

function wordsReversed(str){
    console.log(str.split('').reverse().join(''));
}
console.log(wordsReversed('hello'))
//Create a function that takes in a string
function palindrome(str){
    let palindrome = str.toLowerCase()
                        .trim()
                        .split('')
                        .reverse()
                        .join('');
    if(palindrome === str) {
         alert('It\'s a palindrome!')
    } else  alert('It\s not a palindrome.')
}

console.log(palindrome('racecar'))
//Alert if the string is a palindrome or not
