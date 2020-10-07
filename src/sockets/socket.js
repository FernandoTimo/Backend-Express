import { listen } from 'socket.io';
import { connectSockets } from './connnectSockets';
import 'dotenv/config';

const sockets = (server) => {
  const socket = listen(server, { path: '/timoideas' });
  connectSockets(socket);
};
export default sockets;
