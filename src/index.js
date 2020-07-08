import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const server = express();
import Router from './router/index';

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', Router);

server.listen(process.env.PORT, () => {
  console.log(
    `:: \x1b[36mSERVER\x1b[0m \x1b[33m${process.env.PORT}\x1b[0m \x1b[36mWORKS\x1b[0m ::`
  );
});
//
