import '@babel/polyfill';
import 'dotenv/config';

import express from 'express';
const server = express();

import mongoose from 'mongoose';
import cors from 'cors';
import Router from './router/index.routes';

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use('/', Router);
server.listen(process.env.PORT, () => {
  console.log(
    `:: \x1b[36mSERVER\x1b[0m \x1b[33m${process.env.PORT}\x1b[0m \x1b[36mWORKS\x1b[0m ::`
  );
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.once('open', () => {
  console.log(
    `:: \x1b[36mDATABASE\x1b[0m \x1b[33m${process.env.MONGODB_URI}\x1b[0m \x1b[36mWORKS\x1b[0m ::`
  );
});
