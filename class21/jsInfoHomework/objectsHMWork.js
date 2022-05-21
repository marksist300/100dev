//Task 1: Objects
// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// function isEmpty(obj){
//     for (let key in obj){
//         return false
//     }
//     return true;
// }
// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false

//Task 2: Sum object properties
// We have an object storing salaries of our team: Need to find the sum.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// const totalSalary = Object.values(salaries).reduce((acc,count)=> acc+=count, 0);
//     console.log(totalSalary)

// Task 3: Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
//Function is to be desinged to mutate the object.
// I used the ternary operator and isNaN() instead of the typeOf just for some spaced repetition of use.
// before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   function multiplyNumeric(menu){
//       for (let key in menu){
//           isNaN(menu[key])? menu[key] = menu[key]: menu[key] = menu[key]*2;
//       }
//       return menu
//   }
//   console.log(multiplyNumeric(menu))
//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };


//OBJECT .THIS 1st Task was question to answer not coding exercise.
//Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// const calculator = {
//     read(){
//         let value1 = 1;
//         let value2 = 2;
//         this.a = value1;
//         this.b = value2;
//     },
//     sum: function(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }

// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());


//Task 3
//There’s a ladder object that allows to go up and down:
// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;

//   },
//   showStep: function() { // shows the current step
//     console.log(this.step);
//     return this;
//   }
// };
// console.log(ladder.up().up().down().showStep().down().showStep())