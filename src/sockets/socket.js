import { listen } from 'socket.io';

const sockets = (server) => {
  const socket = listen(server, { path: '/timoideas' });
  socket.on('connection', (client) => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
};
export default sockets;
