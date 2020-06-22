var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.sockets.on('connection', function(socket) {

    console.log("Все норм, подключились");
    connections.push(socket);

    socket.on('disconnect', function() {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Отключились');
    });

    socket.on('send mess', function(data) {
        io.sockets.emit('add mess', { 
            mess: data.mess, 
            name: data.name,
            className: data.className
        });
    });
});