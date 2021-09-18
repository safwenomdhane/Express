const express = require('express');

const app = express();

const middleware = (req, res, next) => {
    const d = new Date();
    if ((d.getDay() < 6) && (0 < d.getDay()) && (8 < d.getHours()) && (17 > d.getHours())) {
        
        next();
     
    } else {
        
        res.sendFile(__dirname+'/files/ferme.html')
    }
  };


app.use(express.static(__dirname+'/files'))



app.get('/',middleware, (req, res) => {
    res.sendFile(__dirname +'/files/home.html')
})

app.get('/about',middleware, (req, res) => {
    res.sendFile(__dirname +'/files/about.html')
})

app.get('/resume',middleware, (req, res) => {
    res.sendFile(__dirname +'/files/resume.html')
})

app.get('/work',middleware, (req, res) => {
    res.sendFile(__dirname +'/files/work.html')
})

app.listen(8000,(err) => err ? console.error(err) : console.log('server is running'));