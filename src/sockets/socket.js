import { listen } from 'socket.io';

const socketsMain = (socket) => {
  socket.on('connection', (client) => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
};
const sockets = (server) => {
  socketsMain(listen(server, { path: '/timoideas' }));
};
export default sockets;
