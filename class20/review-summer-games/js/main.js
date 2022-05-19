//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

let numbers = [1,2,3];

function multiplier(array){
    let result = 1;
    array.forEach(num=>{
        result*=num;
    });
    alert(result);
};

console.log(multiplier(numbers))