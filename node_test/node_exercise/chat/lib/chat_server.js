var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nicknames = {};
var nameUsed = [];
var currentRoom = {};

function listen(server) {
    io = socketio.listen(server);
    io.set('log level', 1);
    io.on('connection', function (socket) {
        guestNumber = assignGuestNumver(socket, guestNumber, nicknames, nameUsed)
    });
}

exports.listen = listen;

function assignGuestName(socket, guestNumber, nicknames, nameUsed) {
    var gustName = 'guest' + guestNumber++;
    nicknames[socket.id] = gustName;
    nameUsed.push(gustName);
    socket.emit('nameResult', {
        success: true,
        name: name
    });
    return guestNumber;
}

function joinRoom(socket, roomname) {
    socket.join(roomname);
    currentRoom[socket.id] = room;
    socket.emit('joinResult', {room: room});
    socket.broadcast.to(room).emit('message', {
        text: nicknames[socket.id] + ' has joined ' + room + '.'
    });
    var usersInRoom = io.sockets.clients(room);
    if (usersInRoom.length > 1) {
        var usersInRoomSummary = 'Users currently in ' + room + ': ';
        for (var index in usersInRoom) {
            var userSocketId = usersInRoom[index].id;
            if (userSocketId != socket.id) {
                if (index > 0) {
                    usersInRoomSummary += nicknames[userSocketId];
                }
            }
        }
    }
    usersInRoomSummary += '.';
    socket.emit('message', {text: usersInRoomSummary});
}

function handleNameChangeAttempts(socket, nicknames, nameUsed) {
    socket.on('nameAttempt', (name) => {
        if (name.indexOf('Guest') == 0) {
            socket.emit('nameResult', {
                success: false,
                message: 'Names cannot begin with "Guest".'
            })
        } else {
            if (nameUsed.indexOf(name) == -1) {
                var previousName = nicknames[socket.id];
                var previousNameIndex = nameUsed.indexOf(previousName);
                nameUsed.push(name);
                nicknames[socket.id] = name;
                delete nameUsed[previousNameIndex];
                socket.emit('nameResult', {
                    success: true,
                    name: name
                });
                socket.broadcast.to(currentRoom[socket.id]).emit('message', {
                    text: previousName + ' is now known as ' + name + '.'
                });
            } else {
                socket.emit('nameResult', {
                    success: false,
                    message: 'That name is already in use.'
                })
            }
        }
    });
}

function handleMessageBroadcasting(socket) {
    socket.on('message', function (message) {
        socket.broadcast.to(message.room).emit('message', {
            text: nicknames[socket.id] + ': ' + message.test
        })
    });
}

function handleRoomJoining(socket) {
    socket.on('join', function (room) {
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    })
}

function handleClientDisconnection(socket) {
    sockent.on('disconnect', () => {
        var nameIndex = nameUsed.indexOf(nicknames[socket.id]);
        delete nameUsed[nameIndex];
        delete nicknames[socket.id];
    });
}