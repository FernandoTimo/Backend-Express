import { listen } from 'socket.io';

const socketsMain = (socket) => {
  socket.on('connection', (client) => {
    console.log(client.id);
    client.on('disconnect', () => {
      console.log('--');
    });
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    client.on('store-comprobante', (comprobante) => {
      console.log(comprobante);
      socket.emit('store-comprobante_recivido', 'recivido');
    });
    client.on('store-comprobante_validado', (StoreCode) => {
      socket.emit('store-comprobante_validado', StoreCode);
    });
  });
};
const sockets = (server) => {
  socketsMain(listen(server, { path: '/timoideas' }));
};
export default sockets;
