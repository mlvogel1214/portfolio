//--------import modules---------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



//----------------Views/Routes------------------
app.get('/', function(req, res){
    res.render('home');
})
app.get('/about', function(req, res){
        res.render('about');
})
app.get('/resume', function(req, res){
        res.render('resume');
})
app.get('/portfolio', function(req, res){
        res.render('portfolio');
})
app.get('/contact', function(req, res){
        res.render('contact');
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})