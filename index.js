import express from "express";
import http from 'http';

const app = express();
// let server = require('http').createServer(app);
const server = http.createServer(app);
let io = require('socket.io').listen(server);


server.listen(3000);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

const users = [];
const connections = [];

io.sockets.on('connection', function(socket) {
    console.log("Все норм, подключились")
    connections.push(socket);

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
    });

});