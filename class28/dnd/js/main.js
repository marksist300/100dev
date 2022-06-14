//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
const list = document.querySelector('ul');

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let subclasses = Array.from(data.subclasses)
        subclasses.forEach(elem=> subclassOut(elem.name))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function subclassOut(value){
    let classes = document.createElement('li');
    classes.innerText = value;
    list.appendChild(classes);
}