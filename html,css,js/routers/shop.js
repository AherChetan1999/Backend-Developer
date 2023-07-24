const express= require('express');
const path= require('path')

const router=express.Router();

router.get("/", (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../',"views" , "shop.html"))
})

router.post("/product", (req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})


module.exports= router;
