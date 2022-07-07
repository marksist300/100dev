const express = require("express");
const app = express();
const figlet = require("figlet");
const HERO_DATA = require("./Hero_API.json")
const PORT = 8000;

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