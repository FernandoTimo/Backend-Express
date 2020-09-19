import { listen } from 'socket.io';
import { StoreSockets } from './StoreSockets';
import 'dotenv/config';

const sockets = (server) => {
  const socket = listen(server, { path: '/timoideas' });
  StoreSockets(socket);
};
export default sockets;
