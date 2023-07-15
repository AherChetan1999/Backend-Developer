const express= require('express');
const body_parser= require('body-parser')
const app=express();

app.use(body_parser.urlencoded({extended:false}));

app.get("/", (req,res,next)=>{
    res.send("Hello Express Project...!!!")
})

app.use('/add-product', (req,res,next)=>{
    console.log("hii cham")
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='number' name='size'><button type='submit'>Add Product</button></form>")
})

app.use("/product", (req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})


app.listen(2000);