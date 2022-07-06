const express = require("express");
const app = express();
const superHeroes = require("./api.json")
const PORT = 8000;
const figlet = require("figlet")

console.log(__dirname + "/index.html")

app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/api/:name", (req,res)=>{
    let heroName = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    console.log(req.params.name)
    if(superHeroes[heroName]){
        let heroInJson = JSON.stringify(superHeroes[heroName])
        res.send(heroInJson)
    }
    else {
        figlet('404! Hero Not Found', function(err, data) {
            if (err) {
                console.log('Not found');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})
