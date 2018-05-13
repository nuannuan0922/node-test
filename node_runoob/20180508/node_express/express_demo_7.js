var express = require('express');
var app = express();

app.param('id', function (req, res, next, value, name) {
    console.log('param id');
    next()
});

app.param('user', function (req, res, next, value, name) {
    console.log('param user');
    next()
});

app.get('/user/:id', function (req, res, next) {
    console.log("get '/user/:id' triggerd");
    res.end('hello world !');
});

app.listen(7700);