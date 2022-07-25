const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const home = require('./js/home.js');
const form = require('./js/form.js');

 app.set('view engine','hbs');
 app.set('views','html');

app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname,'css')));

app.use(home);
app.use(form);


//not found page
app.use((req,res,next)=>{
    res.status(404).render('not',{doc:' 404 Error Page '});   
})

const server = http.createServer(app);
server.listen(3001);