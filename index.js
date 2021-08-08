import '@babel/polyfill';
import 'dotenv/config';
import database from './src/database';
import { server } from './src/server';

server.listen(process.env.PORT, () => {
  console.log(`SERVER: http://localhost:${process.env.PORT}`);
});
database.connection.once('open', () => {
  console.log(`DATABASE: ${process.env.MONGODB_URI}`);
});
