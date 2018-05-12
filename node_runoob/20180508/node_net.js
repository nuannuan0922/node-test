var net = require('net');

var server = net.createServer(function (socket_param) {
    console.log('server connect: ')
    socket_param.write('hello, i am server');
    socket_param.pipe(socket_param);
})

server.listen(7700, 'm.localhost.com', function () {
    console.log('server started: ');
});