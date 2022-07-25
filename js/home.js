const express = require('express');
const root = require('../util/path');
const app = express.Router();


app.get('/',(req,res)=>{
    res.render('home',{home:'Home Page'});
    
})

    
    module.exports = app;
     