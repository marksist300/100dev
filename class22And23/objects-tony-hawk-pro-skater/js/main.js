//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods
function Skater(name, board, style, gender){
    this.name = name
    this.board = board
    this.style = style
    this.gender = gender

    this.ollie = function(){
        return 'Ollie'
    }

    this.kickFlip = function(){
        return 'Nice, flip'
    }

    this.manual = function(){
        return 'Nose manual, machine'
    }
}

const TonyHawks = new Skater('Tony', 'Hawk', 'Ramp', 'male');

console.log(TonyHawks.kickFlip())