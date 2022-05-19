// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'edible-item'
food = 'pizza'
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const animal = 'elephant';
alert(animal[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const numbers = (n1, n2, n3) => {
    const result = n1/n2 * n3;
    alert(result);
}
numbers(4,2,6)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const squareRoot = num => {
    console.log(Math.floor(Math.cbrt(num)))
}

squareRoot(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month){
    const summer = /(^June$)|(^July$)|(^August$)/i
    month.match(summer)? alert('Yay!'): alert('Boo!')
}

month('august')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function counter(num){
    let counter = 0;
    while(counter <= num){
        if(counter%5 !== 0) console.log(counter)
        counter++
    }
}

counter(45)