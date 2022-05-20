//Create a stopwatch object that has four properties and three methods

const stopWatch = {
    shape: 'round',
    minutes: 20,
    seconds: 35,
    miniSeconds: 22,
    reset(){
        this.minutes = 0;
        this.seconds = 0;
        this.miniSeconds = 0;
        return `Time is ${this.minutes} minutes, ${this.seconds} seconds and ${this.miniSeconds}`
    },
    stop(){
        return `Time is ${this.minutes} minutes, ${this.seconds} seconds and ${this.miniSeconds}`
    },
    beep(){
        alert('BEEEEP!')
    }
}

console.log(stopWatch.stop())
console.log(stopWatch.reset())
console.log(stopWatch)