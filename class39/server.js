const express = require("express");
const app = express();
const figlet = require("figlet");
const PORT = 8000;
const HERO_DATA = {
    "Batman":{
        "Name": "Bruce Wayne",
        "From": "Gotham City",
        "Age": 37,
        "Super Powers": ["Incredible Wealth", "Gadgets", "Genius Intelligence", "Fighting Abilities"]
    },

    "Wolverine":{
        "Name": "James Howlett",
        "From": "Alberta, Canada",
        "Age": "?",
        "Super Powers": ["Super Strength", "Adamantium Skeleton", "Claws", "Rage", "Rapid Healing"]
    },

    "Spiderman":{
        "Name": "Peter Parker",
        "From": "New York City",
        "Age": 18,
        "Super Powers": ["Strength", "Flexibility", "Spider Sense", "Web Shooting"]
    },

    "Superman":{
        "Name": "Clark Kent",
        "From": "Krypton",
        "Age": "?",
        "Super Powers": ["Super Strength", "Flight", "X-Ray Vision", "Shoot Lasers From His Eyes"]
    }
}
app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/api/:name", (req,res) => {
    let superHeroName = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    console.log(superHeroName);
    let heroInJson = JSON.stringify(HERO_DATA[superHeroName]);
    if(HERO_DATA[superHeroName]){
        res.send(heroInJson)
    }
    else{
        figlet("404 : Hero Not Found!", (err,data)=>{
            if(err){
                console.log(`Error: ${err}`);
                return;
            }
            res.write(data);
            res.end();
        });
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`);
})