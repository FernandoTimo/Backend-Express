import { Server } from 'http';
import app from './app';
export const server = Server(app);
require('./sockets/socket');
