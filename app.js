const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.status(200).render('home');
})

app.get('/about', (req,res) => {
    res.status(200).render('about');
})

app.get('/works', (req,res) => {
    res.status(200).render('works');
})

app.listen(3000);