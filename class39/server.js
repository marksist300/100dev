const express = require("express");
const app = express();
const figlet = require("figlet");
const HERO_DATA = require("./HERO_DATA.json")
const PORT = 8000;

app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.get("/api/:name", (req,res) => {
    let superHeroName = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    if(HERO_DATA[superHeroName]){
        res.json(HERO_DATA[superHeroName])
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