//Get a dog photo from the dog.ceo api and place the photo in the DOM
const output = document.querySelector('img');

// 'https://dog.ceo/api/breeds/image/random'

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=> res.json())
    .then(data=>{
        console.log(data.message)
    })
    .catch(err=> {
        console.log(`Error: ${err}`)
    })
