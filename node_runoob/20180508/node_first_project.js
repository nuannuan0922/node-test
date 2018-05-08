var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    var data = fs.readFileSync('package.json');
    console.log(data.toString());
    console.log('success');

    var data1 = fs.readFile('package.json', function (err, data) {
        console.log(arguments);
        if (err) return console.error(err);
        console.log(data.toString());
        return data.toString();
    });
    console.log(data1.toString());
    console.log('success1');
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end(data.toString()+ '\n');
    response.end(data1.toString()+ '\n');
}).listen(7700);