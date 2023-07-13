const express= require("express");

const app= express();

app.get("/", (req,res)=>{
    res.send("Welcome to my Node Js project.")
})

app.get("/about", (req,res)=>{
    res.send("Welcome to About Us page.")
})

app.get("/home", (req,res)=>{
    res.send("Welcome home")
})

app.get("/node", (req,res)=>{
    res.send("Welcome to my Node Js project")
})

app.listen(2000, ()=>{
    console.log("server started....!!");
})