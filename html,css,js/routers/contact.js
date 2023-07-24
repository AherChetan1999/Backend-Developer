const express= require('express');
const path= require('path')

const router=express.Router();

router.get('/contact_us', (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../',"views" , "contact.html"))
})

router.post("/success", (req,res,next)=>{
      res.send("<h1>Form Succesfully Filled......</h1>")
})


module.exports= router;