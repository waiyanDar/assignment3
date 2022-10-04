const express = require('express');
const app = express();

app.get("",(req,res)=>{

    res.sendFile(__dirname + "/view/home.html");
})

app.get("/getNum",(req,res)=>{


    res.sendFile(__dirname + "/view/generate.html");
})

app.listen(2000,() => {
    console.log(`Server starting up at: port:2000:`);
})