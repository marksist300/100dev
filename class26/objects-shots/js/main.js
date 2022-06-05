// //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// class CocktailList {
//     constructor(input){
//         this.input = input;
//         this.index = 0;
//         this.drinksearchActive = false;
//         this.drinkSelectionLength = 0;
//         this.drinkName = '';
//         this.instructions = '';
//         this.drinkImage = '';

//     }
//     reset() {
//         console.log('reset done')
//         this.index = 0;
//         this.drinksearchActive = false;
//         this.drinkSelectionLength = 0;
//         this.drinkName = '';
//         this.instructionsTitle = '';
//         this.instructions = '';
//         this.drinkImage = '';
//         this.fetcher(this.input)
//     }
//     prevDrink(){
//         if(this.index >0){
//             this.index--
//             return this.fetcher()
//         }   else return;
//     }
//     nextDrink(){
//         if(this.index < this.drinkSelectionLength){
//             this.index++;
//             return this.fetcher()
//         } else return;
//     }
//     noInput() {
//         this.input.classList.add('warning')
//     }

//     thereIsInput(){
//         if(this.input.classList.contains('warning')) this.input.classList.remove('warning');
//     }

//     fetcher(){
//         this.thereIsInput()
//         const selection = input.value;
//         fetch(url+selection)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             console.log(data.drinks.length)
//                 this.drinksearchActive = true;
//                 this.drinkSelectionLength = data.drinks.length;
//                 this.drinkName = data.drinks[this.index].strDrink;
//                 this.instructionsTitle = 'Instructions: '
//                 this.instructions = data.drinks[this.index].strInstructions
//                 this.drinkImage = data.drinks[this.index].strDrinkThumb;
//                 this.displayDrink()
//             })
//             .catch(err=> {
//                 `Error: ${err}`
//             });
//     }

//     displayDrink(){
//         nameOutput.innerText = this.drinkName;
//         instructionsOutput.innerText = this.instructions
//         imgOutput.src = this.drinkImage;
//     }
// }


// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
// const input = document.querySelector('input');

// // Buttons
// const submitBtn = document.querySelector('.choice-btn');
// const buttons = Array.from(document.querySelectorAll('button'));
// const nameOutput = document.querySelector('#name-output');
// const instructionsTitle = document.querySelector('h3');
// const instructionsOutput = document.querySelector('p');
// const imgOutput = document.querySelector('img');
// buttons.forEach(btn => btn.addEventListener('click', e => 
//     {
//         if(e.target.classList.contains('select-btn')) {
//             const btnId = e.target.id;
//             if (input.value == '') return cocktailList.noInput();
//             else if(btnId === 'submit-btn'){
//                 cocktailList.fetcher(input.value);
//             } else if(btnId === 'submit-btn' && cocktailList.drinkSearchActive === true){
//                 cocktailList.reset()
//                 cocktailList.fetcher(input.value);
//             } else if(cocktailList.drinksearchActive === true && btnId === 'prev-btn'){
//                 return cocktailList.prevDrink();
//             } else if(cocktailList.drinksearchActive === true && btnId === 'next-btn'){
//                 return cocktailList.nextDrink();
//             }
//         } 
//     }
// ))



// const cocktailList = new CocktailList(input)
/*
To take a user input and stor the value.
To set a function to retreive data.
take that data, parsed as JSON and search for the user input.value
To then display a picture of the user's choice of cocktail, as well as its title, instruction for how to make it.
Retrieve all results as an array of 'n' elements. store all those elements as images in a carousel.
On clicking to the next image update all the other info (instructions, name etc to represent the image).
*/

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
//input received from the user
const input = document.querySelector('input');
// Buttons
const submitBtn = document.querySelector('.choice-btn');
const buttons = Array.from(document.querySelectorAll('button'));
const nameOutput = document.querySelector('#name-output');
const instructionsTitle = document.querySelector('h3');
const instructionsOutput = document.querySelector('p');
const imgOutput = document.querySelector('img');
let selectionActive = false;
let flaggedNoInput = false;
let drinkNames = [];
let drinkImages = [];
let drinkInstructions = [];
let drinkArrLength;
let index = 0;

buttons.forEach(btn=> btn.addEventListener('click', e=>{

    if(e.target.id === 'submit-btn' && input.value === ''){
        noInput()
    } else if(e.target.id === 'submit-btn' && selectionActive === false){
        retriever(input.value);
        console.log('retrieved')
    } else if (e.target.id === 'submit-btn' && selectionActive === true){
        resetAndSearch(input.value)
    } else if (e.target.id === 'nextCarousel' && selectionActive === true){
        next(drinkArrLength);
        console.log('nope')
    } else if (e.target.id === 'prevCarousel' && selectionActive === true){
        prev(drinkArrLength);
        console.log('nope')

    }
}))

function next(ttlNumOfDrinks){
    if(index < ttlNumOfDrinks){
        index++
        console.log(index);
        displayDrinkData(drinkNames, drinkImages, drinkInstructions, index)
    } else {
        index = 0;
        displayDrinkData(drinkNames, drinkImages, drinkInstructions, index)
    }
}

function prev(ttlNumOfDrinks){
    if(index > 0){
        index--
        console.log(index)
        displayDrinkData(drinkNames, drinkImages, drinkInstructions, index)
    } else {
        index = ttlNumOfDrinks;
        displayDrinkData(drinkNames, drinkImages, drinkInstructions, index)
    }
}

function resetAndSearch(newSelection){
    selectionActive = false;
    drinkNames = [];
    drinkImages = [];
    drinkInstructions = [];
    drinkArrLength = 0;
    index = 0;
    retriever(newSelection);
}

function noInput(){
    flaggedNoInput = true;
    document.querySelector('.noInput').style.visibility = 'visible';
}

function inputFound(){
    document.querySelector('.noInput').style.visibility = 'hidden';
    flaggedNoInput = false;
}


function retriever(selection){
    fetch(url + selection)
        .then(res=> res.json())
        .then (data=> {
            drinkArrLength = data.drinks.length-1;
            console.log(data.drinks)
            data.drinks.forEach(elem=> {
                drinkNames.push(elem.strDrink)
                drinkImages.push(elem.strDrinkThumb)
                drinkInstructions.push(elem.strInstructions)
            });
            displayDrinkData(drinkNames, drinkImages, drinkInstructions, index);
        })
        .catch(err=> {
            console.log(`Error: ${err}`)
        })
}
function displayDrinkData(drinkName, drinkImage, drinkInstructions, index=0){
    if(flaggedNoInput === true){
        inputFound();
    }
    let i = index;
    selectionActive = true;
    nameOutput.innerText = drinkName[i];
    imgOutput.src = drinkImage[i];
    instructionsTitle.innerText = 'Instructions: ';
    instructionsOutput.innerText = drinkInstructions[i];
}