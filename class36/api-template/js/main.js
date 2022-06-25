//Make an api request using async await


async function doggoAPI(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    const photo = await data.message;
    document.querySelector('img').src = photo;
}

document.querySelector('button').addEventListener('click', doggoAPI);