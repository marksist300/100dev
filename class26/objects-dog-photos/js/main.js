//Get a dog photo from the dog.ceo api and place the photo in the DOM
const output = document.querySelector('img');


fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data =>{
        console.log(data.message)
        output.src = data.message;
    })
    .catch(err => {
    console.log(`Error: ${err}`)
    });


