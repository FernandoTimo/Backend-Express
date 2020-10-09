import { socket } from './socket';

socket.on('connection', (client) => {
  console.log(client.id);
});
