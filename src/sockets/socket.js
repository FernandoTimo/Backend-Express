import Socket from 'socket.io';
import { server } from '../server';
export const socket = Socket(server, {
  // path: '/timoideas',
  // cors: {
  //   origin: 'http://localhost:3000',
  //   methods: ['GET', 'POST'],
  //   credentials: true,
  //   allowedHeaders: ['hola'],
  // },
});
require('./clientConnection');
