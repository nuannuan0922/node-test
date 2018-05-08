var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('newListener', function (eventName, eventHandler) {
    console.log(eventName + '被监听');
});

eventEmitter.on('removeListener', function (eventName, eventHandler) {
    console.log(eventName + '被移除监听');
});

eventEmitter.on('selfevent', function () {
    console.log(arguments);
});

eventEmitter.on('selfevent', function () {
    console.log(arguments);
});

var fn = function () {
    console.log('fn to remove');
}

eventEmitter.on('selfevent', fn);

eventEmitter.emit('selfevent', 'argument 1');

var beforeRemoveCount = events.EventEmitter.listenerCount(eventEmitter, 'selfevent');

eventEmitter.removeListener('selfevent', fn);

var afterRemoveCount = events.EventEmitter.listenerCount(eventEmitter, 'selfevent');
console.log('beforeRemoveCount = ' + beforeRemoveCount + '\n', 'afterRemoveCount = ' + afterRemoveCount);

http.createServer(function (request, response) {
    eventEmitter.emit('selfevent');
}).listen(7700);