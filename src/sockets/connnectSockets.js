import { socket } from './socket';

socket.on('connection', (client) => {
  console.log(`\x1b[31mNuevoCliente:\x1b[0m`, client.id);
});
