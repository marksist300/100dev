// //Camelize strings which are concatenated with '-' e.g. background-color should = backgroundColor
// // Note to self, remember the explcit return inside the map method is the code is inside brackets.
// function camelize(strings) {
//     return strings
//                   .split('-')
//                   .map((word, index) => {
//                      return index == 0? word: word[0].toUpperCase() + word.slice(1)
//                   })
//                   .join('')
// }

// Task 2: Filter range - filter an array between a range of nums (a) - (b)
// Don't mutate the array: a new aray should be returned

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter(num => (num>=a && num<=b))
// };
// console.log(filterRange(arr, 1, 3)); // 3,1 (matching values)

// //Task 3: Filter numbers in a range, mutate the original array to remove the numbers, don't return anything.
// function filterRangeInPlace(arr, a, b) {
//     arr.forEach(num=> {
//         if(num >=a && num <=b){
//         } else {
//             arr.splice(arr.indexOf(num,1))
//         }
//     })
//  }

// //Task 4: Sort in decreasing order 
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b-a)

// console.log( arr ); // 8, 5, 2, 1, -10

// //Task 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
// const arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr){
//     const copyArr = [...arr]
//     return copyArr.sort()
// }

// console.log(copySorted(arr))
// console.log(arr)

//Task 6: Build an extenadble calculator

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.


//Task 7: Mapped Array: create new array with first and last name combined into full name
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user, index) => {
//     user = {
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     }
//     return user
// }, [])

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


//Task 8
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr){
//     return arr.sort((a,b)=> a.age-b.age)
// }
// console.log(sortByAge(arr))
// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)
// // now: [john, mary, pete]

// Task 9 Write a shuffle function that randomly shuffles the order of an array of numbers

// const arr = [1, 2, 3];

// function shuffle(arr){
//     return arr.sort((a,b) => Math.random() -0.5);
// }

// console.log(shuffle(arr))

//Task 10 
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(){
//     return arr.reduce((total, current)=> total += current.age/arr.length, 0)
// }
// // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//Task 11: Create a function unique(arr) that should return an array with unique items of arr.


// function unique(arr) {
//     const uniqueArray = [];
//     arr.reduce((a,b)=> {
//          if(uniqueArray.indexOf(b) ===-1){
//            uniqueArray.push(b)
//          }
//      },)
//      return uniqueArray;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(strings))
// // alert( unique(strings) ); // Hare, Krishna, :-O

//Task 12: Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
// Only use .reduce() for this function

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(user){
    return user.reduce((object, user) => {
        object[user.id] = user
        return object
    }, {})
}

let usersById = groupById(users);
console.log(usersById)
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

