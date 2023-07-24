const express= require('express');
const body_parser= require('body-parser')
const admin=require("./routers/admin");
const shop=require("./routers/shop");
const contact=require("./routers/contact");
const app=express();

app.use(body_parser.urlencoded({extended:false}));

app.use(admin);
app.use(shop);
app.use(contact);

app.use((req,res)=>{
     res.status(404).send('<h1>Page Not Found.</h1>')
});


app.listen(2000);