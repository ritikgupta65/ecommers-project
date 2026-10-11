const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const db  = require("./config/mongoose-connection");
const path = require('path');
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookie());

app.use("/owner" , ownerRouter);
app.use("/user" , userRouter);
app.use("/products" , productsRouter);

app.set("view engine" , 'ejs');

app.get('/' , function(req , res){
    res.render("login")
})

app.listen(3003);