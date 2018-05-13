var express = require('express');
var fs = require('fs');
var app = express();

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/../mock/users.json", 'utf8', function (e, data) {
        res.end(data);
    })
});

app.listen(7700);