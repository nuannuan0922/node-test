var http = require('http');
var url = require('url');
var fs = require('fs');
var queryString = require('querystring');

http.createServer(function (req, res) {
    
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    if (pathname === '/') {
        fs.readFile(__dirname + '/index.html', function (e, data) {
            if (e) {
                write(res, e);
            } else {
                write(res, data);

            }
        });
    } else if (pathname === '/post') {
        var postinfo = '';
        req.on('data', function (data) {
            console.log('in data event')
            postinfo += data;
        });
        req.on('end', function (data) {
            console.log(postinfo);
            // var body = queryString.parse(postinfo);
            // console.log(body);
            write(res, postinfo);
        })
    }

    function write(req, data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.write(data.toString());
        res.end();
    }
}).listen(7700);