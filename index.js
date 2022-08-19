const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();

app.use(cors('*'));

app.get('',async(req,res)=>{
    res.send("welcome to home")
})


app.get('/a/:key',async(req,res)=>{
    res.send(`message ===> ${req.params.key}`)
})

app.use('*',async(req,res)=>{
    res.send("url nor found");
})


app.listen(port,()=>{
    console.log(`Server is running at port => ${port}`);
})