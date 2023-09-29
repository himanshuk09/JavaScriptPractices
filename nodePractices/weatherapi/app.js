const { response } = require("express");
const express = require("express");
const https=require("https");


const app=express();

app.get("/",(req,res)=>{
    
    const url ="https://api.openweathermap.org/data/2.5/weather?q=London&appid=af14a1b31979c418648232912c60d20f";
    https.get(url,(response)=>{
        console.log(response);
    })
    res.send("server created successfully")
})




app.listen(6060,()=>{
    console.log("Server is running on port 6060.")
})