const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const userdata = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cookie());

app.set("view engine" , 'ejs');

app.get('/' , function(req , res){
    res.render("login")
})

app.get('/create' ,async function(req , res){
    const user = await userdata.create({
        name :"ritik" , 
        email : "gipa@gmail.com" , 
        phone: 78787,

    })
})



app.listen(3003);