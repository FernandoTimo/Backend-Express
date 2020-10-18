import { socket } from './socket';
import { join } from 'path';
socket.on('connection', (client) => {
  console.log(`\x1b[31mNuevoCliente:\x1b[0m`, client.id);
  client.emit('server', {
    message: `¡Hola ${client.id}, Socket.io de da la bienvenida!`,
    path: join(__dirname, 'clientConnection.js'),
  });
  client.on('saludar', ({ message }) => {
    socket.emit('saludo', { id: client.id, message });
  });
});
