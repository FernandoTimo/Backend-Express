import { listen } from 'socket.io';
import { server } from '../server';
export const socket = listen(server, { path: '/timoideas' });

require('./clientConnection');
