var net = require('net');

var socket = net.connect({port: 7700}, function () {
    console.log('连接到服务器');
    // console.log(arguments);
    // // net.connect(7700, function (connection) {
    //     connection.write('hi, i am client');
    //     connection.end();
    // // });
    
});

socket.on('lookup', function () {
    console.log('lookup triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})
socket.on('connect', function () {
    console.log('connect triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})
socket.on('data', function (data) {
    console.log('data triggered: ');
    console.log(arguments);
    // socket.write(data.toString());
    socket.end();
    console.log('-------------------------')
})
socket.on('end', function () {
    console.log('end triggered: ');
    console.log(arguments);
    // socket.end();
    console.log('-------------------------')
})
socket.on('timeout', function () {
    console.log('end triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})
socket.on('drain', function () {
    console.log('end triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})
socket.on('error', function () {
    console.log('error triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})
socket.on('close', function () {
    console.log('close triggered: ');
    console.log(arguments);
    console.log('-------------------------')
})

console.log('socket.bufferSize --------------- ' + socket.bufferSize);
console.log('socket.remoteAddress ------------ ' + socket.remoteAddress);
console.log('socket.remoteFamily ------------- ' + socket.remoteFamily);
console.log('socket.remotePort --------------- ' + socket.remotePort);
console.log('socket.localAddress ------------- ' + socket.localAddress);
console.log('socket.localPort ---------------- ' + socket.localPort);
