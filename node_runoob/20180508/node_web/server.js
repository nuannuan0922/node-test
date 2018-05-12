var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (res, req) {
    var pathname = url.parse(res.url).pathname;
    fs.readFile(__dirname + '/' + pathname.slice(1), function (e, data) {
        if (e) {
            req.writeHead(404, {"Content-Type": "text/html"});
        } else {
            req.writeHead(200, {"Content-Type": "text/html"})
            req.write(data.toString());
        }
        req.end();
    })
}).listen(7700);

console.log('Server running at http://127.0.0.1:7700/');