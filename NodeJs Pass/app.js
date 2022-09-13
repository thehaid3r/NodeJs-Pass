
const schemafinal=require('./order_module')
const express=require('express');


const app=express();
app.get('/',(req,res)=>{
    res.send("please go to localhost:3000/orders")
    })

app.get('/orders',(req,res)=>{
    
res.send((schemafinal));
})
app.listen(3000,()=> console.log('litseing to port 3000'))