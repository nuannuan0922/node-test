var express = require('express');
var app = express();

app.param(function (id, option) {
    console.log(arguments);
    console.log('app param function called');

    return function (req, res, next, val) {
        if (val == option) {
            next();
        } else {
            res.sendStatus(403);
        }
        // next();
    }
});

app.param('id', 1337);

app.get('/:id', function (req, res) {
    console.log('get "/:id" called');
    console.log(req.param.id);
    res.end('hello world!');
});

app.listen(7700);