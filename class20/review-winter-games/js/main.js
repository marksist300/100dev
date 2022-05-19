//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// Without map or filter;
// function onlyEvens(array){
//     const result = [];
//     for(let elem of array){
//         if(elem %2 === 0){
//             result.push(elem)
//         }
//     }
//     return result;
// }

// with a higher order function
// function onlyEvens(array){
//     const result = [];
//     array.map(elem=>{
//         if(elem % 2 === 0){
//             result.push(elem);
//         }
//     })
//     return result;
// }

function onlyEvens(array){
    return array.filter(num => num % 2 === 0)
}

console.log(onlyEvens(numList))