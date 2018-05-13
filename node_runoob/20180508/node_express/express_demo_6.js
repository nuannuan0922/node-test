var express = require('express');
var app = express();



app.get('/', function (req, res, next) {
    console.log('callback 1')
    res.write('hello ');
    next();
}, function (req, res, next) {
    console.log('callback 2')
    res.write('world ');
    next()
}, function (req, res, next) {
    console.log('callback 3')

    next();
});


app.all('/', function (req, res, next) {
    console.log('test next');
    res.end('! ');
})

app.listen(7700);