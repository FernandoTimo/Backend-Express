import '@babel/polyfill';
import 'dotenv/config';
import database from './database';
import { server } from './server';

server.listen(process.env.PORT, () => {
  console.log(
    `:: \x1b[36mSERVER\x1b[0m \x1b[33mhttp://localhost:${process.env.PORT}\x1b[0m \x1b[36mWORKS\x1b[0m ::`
  );
});
database.connection.once('open', () => {
  console.log(
    `:: \x1b[36mDATABASE\x1b[0m \x1b[33m${process.env.MONGODB_URI}\x1b[0m \x1b[36mWORKS\x1b[0m ::`
  );
});
