const express = require('express');
const app = express();
const mongoose = require('mongoose')

const Router = require("./routers/router")
const dbHandler = require("./handlers/dbHandler")


app.use(Router)
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('index'); // render index.ejs
})

app.get('/sign-in', function(req, res) {
    res.render('sign-in.ejs');
})

app.get('/sign-up', function(req, res) {
    res.render('sign-up.ejs');
})

app.listen(3000, ()=>{
    // dbHandler.connectToDb()
    console.log("Server is running on port 3000")
})

