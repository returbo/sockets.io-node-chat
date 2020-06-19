import express from "express";
import server from 'http';
import io from 'socket.io';

const app = express();

server = server.createServer(app);
io = io.listen(server);

server.listen(3000);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});