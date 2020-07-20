import { createServer } from 'http';
import socket from './sockets/socket';
import app from './app';

export const server = createServer(app);
socket(server);
export default server;
