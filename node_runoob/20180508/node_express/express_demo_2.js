var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('/ get');
    res.send('根目录 get 请求');
})

app.post('/', function (req, res) {
    console.log('/ post');
    res.send('根目录 post 请求');
})

app.get('/index', function (req, res) {
    console.log('/index get');
    res.send('index get 请求');
})

app.post('/index', function (req, res) {
    console.log('/index post');
    res.send('index post 请求');
})

app.get('/ab*cd', function (req, res) {
    console.log('/ab*cd get');
    res.send('ab*cd get 正则请求');
})

var server = app.listen(7700, function () {
    var address = server.address().address;
    var port = server.address().port;

    console.log('应用访问地址是：http://%s:%s', address, port);
});