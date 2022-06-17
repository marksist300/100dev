//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    speak(){
        console.log(`${this._name} speaks`)
    }
}

class Cat extends Animal{
    constructor(name, breed, domesticated){
        super(name)
        this._breed = breed
        this._domesticated = domesticated
    }

    get breed(){
        return this._breed;
    }

    get domesticated(){
        return this._domesticated;
    }

    speak(){
        super.speak()
        console.log(`${this.name} Meows`)
    }
}

class Cow extends Animal{
    constructor(name, gender){
        super(name)
        this._gender = gender
    }

    speak(){
        super.speak()
        console.log(`${this.name} Moos`)
    }
}

const dog = new Animal('Toby');
const tiffy = new Cat('Tiffy', 'Maine Coon', true)
const daisy = new Cow('Daisy', 'Female');