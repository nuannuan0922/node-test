var express = require('express');
var app = express();

app.route('/user')
   .all(function (req, res, next) {
       console.log('all called');
       next()
   })
   .get(function (req, res, next) {
       console.log('get callback 1');
       next();
   }, function (req, res, next) {
        console.log('get callback 2');
        res.end('hello world !');
   });

app.listen(7700);