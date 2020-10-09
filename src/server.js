import { createServer } from 'http';
import app from './app';
export const server = createServer(app);
require('./sockets/socket');
