var express = require('express');
var fs = require('fs');
var app = express();

var userInfo = {
    "user4": {
        "name": "张四",
        "age": 26,
        "password": "abc1234",
        "id": 4
    }
}
app.get('/addUser', function(req, res) {
    fs.readFile(__dirname + '/../mock/users.json', 'utf8', function (e, data) {
        var users = JSON.parse(data);
        users['user4'] = userInfo['user4'];
        res.end(JSON.stringify(users));
    })
})

app.listen(7700);