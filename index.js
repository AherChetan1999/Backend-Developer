const express= require("express");

const app= express();

app.get("/", (req,res)=>{
    res.send("Chetan Aher")
})

app.listen(4000, ()=>{
    console.log("Hii chetan server is  started....!!");
})