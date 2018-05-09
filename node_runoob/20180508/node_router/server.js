var http = require('http');
var url = require('url');

function start(router) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        router.parse(pathname);
        response.writeHeader(200, {'content-type': 'text/plain'});
        response.write('hello world');
        response.end();
    }).listen(7700);
}

exports.start = start;