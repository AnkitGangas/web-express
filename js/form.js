const express = require('express');
const root = require('../util/path');
const app = express.Router();



app.get('/form',(req,res,next)=>{
    res.render('form',{form:'Form Page'});
   
  })
app.post('/submit',(req,res)=>{
  res.send('<h1> Form Submit</h1>')


});
  module.exports = app;

