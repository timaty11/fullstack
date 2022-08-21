import express from 'express';
import routers from './router/routers.js';
import http from 'http';
import path from 'path';
import { Server, Socket } from 'socket.io';
import { getSocket } from './tim_sock.js';
const app = express();
const server = http.createServer(app);
export const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(path.join(path.resolve(), 'public')));
app.use('/script', express.static(path.join(path.resolve(), 'script')));
app.use(routers);

const socket = io.on('connection', getSocket);

// io.on('create_room', (room_name) => {
//     io.emit("add_room", room_name);
// });

server.listen(3030, () => console.log('Listening on port 3030'));
