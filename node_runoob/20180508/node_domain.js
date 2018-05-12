var domain = require('domain');
var EventEmitter = require('events').EventEmitter;

var domain_instance_1 = domain.create();
var eventEmitter = new EventEmitter();

domain_instance_1.on('error', function () {
    console.log('domain error triggered');
});

eventEmitter.on('error', function () {
    console.log('eventEmitter error triggered');
})

domain_instance_1.add(eventEmitter);

eventEmitter.emit('error');

eventEmitter.removeAllListeners('error');

eventEmitter.emit('error');