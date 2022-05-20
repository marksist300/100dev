//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Hey Arthur', 'Pokemon', 'Power Rangers']
tvShows.forEach(show=> console.log(show))
//Create and array of numbers
const numbers = [10,9,1,2,3,4,5,6,7,8,9]
//Return a new array of numbers that includes every even number from the previous Arrays
const newNums = numbers.filter(num => num%2 === 0);
//Create a function that takes in an array of numbers
function giveArray(array){
    let newArray = array.sort((a,b)=> a-b);
    alert(newArray[1] +newArray[newArray.length-2])
}
giveArray(numbers)
//Alert the sum of the second lowest and the second highest number
