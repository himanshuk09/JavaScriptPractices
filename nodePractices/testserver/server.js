const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("<h1>server running successfully</h1>")

})
app.listen(2345,()=>{
    console.log("server running on port 2345");
})