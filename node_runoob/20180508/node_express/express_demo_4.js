var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/template'))

app.get('/', function (req, res) {
    
})

// app.get('/submit', function (req, res) {
//     var requestParam = {
//         name: req.query.name,
//         age: req.query.age
//     }
//     res.writeHead(200, {'Content-Type': 'text/html; utf-8;'})
//     res.end(JSON.stringify(requestParam));
// })

// var urlencodedParser = bodyParser.urlencoded({extended: false})
// app.post('/submit', urlencodedParser, function (req, res) {
//     var requestParam = {
//         name: req.body.name,
//         age: req.body.age
//     }
//     res.writeHead(200, {'Content-Type': 'text/html; utf-8;'})
//     res.end(JSON.stringify(requestParam));
// })

app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: __dirname + '/webresource/'}).array('intro'));
app.post('/submit_file', function (req, res) {
    var dest_file = __dirname + "/webresource/" + req.files[0].originalname;
    console.log(req.files[0].path);
    var data = fs.readFileSync(req.files[0].path);
    console.log(data);
    fs.readFile(req.files[0].path, function (e, data) {
        fs.writeFile(dest_file, data, function (e) {
            if (e) {
                console.log(e);
            } else {
                var response = {
                    msg: 'upload success',
                    filename: req.files[0].originalname,
                    name: req.body.name,
                    age: req.body.age
                }
                res.end(JSON.stringify(response));
            }
        })
    });
});

app.listen(7700);