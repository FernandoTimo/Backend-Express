import { listen } from 'socket.io';

const socketsMain = (socket) => {
  socket.on('connection', (client) => {
    console.log(client.id);
    client.on('disconnect', () => {
      console.log('--');
    });
  });
};
const sockets = (server) => {
  socketsMain(listen(server, { path: '/timoideas' }));
};
export default sockets;
