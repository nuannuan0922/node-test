var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

let app = express();
app.use(express.static(__dirname + '/template'));
app.use(cookieParser());
app.get('/', function (req, res) {
    console.log('cookie ' + util.inspect(req.cookies))
});

app.listen(7700)