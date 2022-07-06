const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req,res)=>{
    res.sendFile(`${__dirname}index.html`)
})

app.get("/api", (req,res)=>{
    res.sendFile(`${__dirname}api.json`)
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port: ${PORT}`)
})