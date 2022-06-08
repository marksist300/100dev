//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeNetflixTVShows {
    constructor(name, rating, seasons, episodes){
        this.name = name;
        this.rating = rating;
        this.seasons = seasons;
        this.episodes = episodes;
    }
    play(){
        console.log(`${this.name} is playing.`)
    }

    ratingCheck(){
        console.log(`${this.name} has a rating of ${this.rating}.`);
    }

    stop(){
        console.log(`${this.name} is paused.`)
    }

}

const bridgerton = new MakeNetflixTVShows('Bridgerton', 8, 2, 24)

console.log(bridgerton.play())

