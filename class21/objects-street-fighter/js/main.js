//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Fighter (nationality, hairColour, fightingStyle, name){
    this.name = name,
    this.fightingStyle = fightingStyle,
    this.hairColour = hairColour,
    this.nationality = nationality,

    this.upperCut = function () {
       return  `${this.name} uppercuts you!`
    }

    this.crouch = function () {
       return `${this.name} crouches!`
    }

    this.swingKick = function () {
       return `${this.name} swings a big ol' kick atchYa!`
    }
}

const Ken = new Fighter('American', 'Blonde', 'Karate', 'Ken')

console.log(Ken.swingKick())