//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const input = document.querySelector('input');
const submit = document.querySelector('.choice-btn')
const nameOutput = document.querySelector('h2')
const instructionsOutput = document.querySelector('p')
const imgOutput = document.querySelector('img');
submit.addEventListener('click', fetcher)

function fetcher(){
    const selection = input.value;
    let index = 0;
    fetch(url+selection)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            nameOutput.innerText = data.drinks[index].strDrink;
            instructionsOutput.innerText = data.drinks[index].strInstructions;
            imgOutput.src = data.drinks[index].strDrinkThumb;
        })
        .catch(err=> {
            `Error: ${err}`
        });
}