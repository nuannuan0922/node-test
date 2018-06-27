var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    // var data = request.data
    // console.log(data);
    // response.writeHeader(200, {
    //     'Content-Type': 'text/html;charset=utf-8'
    // })
    // response.write(data);
    // response.end();

    var url = request.url;
    var pathName = url.slice(1);
    fs.readFile(__dirname + '/' + pathName, function (e, data) {
        if (e) {
            response.writeHeader(404, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            response.write(e.toString());
            
            
        } else {
            response.writeHeader(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            response.write(data);
        }
        response.end();
    });
});

server.listen(8881);
console.log('server start');
console.log('url: http://127.0.0.1:8881');