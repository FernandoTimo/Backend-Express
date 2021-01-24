import { Server } from 'socket.io';
import { server } from '../server';
export const socket = new Server(server, { path: '/timoideas' });
require('./clientConnection');
