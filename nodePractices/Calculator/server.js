const express = require("express");
const bodyParser =require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    //res.send("Hello world");
    res.sendFile(__dirname + "/index.html")
    
})
app.post("/",(req,res)=>{
    //console.log(req.body);
    var n1=Number(req.body.num1) ;
    var n2=Number(req.body.num2) ;
    var result=n1+n2;
    res.send("sum of two number id " + result)
})

//bml calculator

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/bmicalculator",(req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height*height);
    res.send("BMI is " + bmi);
})
app.listen(2020,()=>{
    console.log("server is running on port 2020");
})