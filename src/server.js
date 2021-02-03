import { Server } from 'http';
import app from './app';
export const server = Server(app);
import { Server as Socket } from 'socket.io';
const io = new Socket(server, {
  cors: { origin: '*' },
});
io.on('connection', () => {
  console.log('hola mundo');
});
