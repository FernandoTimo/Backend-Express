import express from 'express';
const middleware = express();

import path from 'path';
import favicon from 'serve-favicon';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import session from 'express-session';
import router from '../router/routes';
middleware.use(
  session({
    secret: process.env.SESSIONSECRET,
    resave: true,
    saveUninitialized: false,
  })
);
middleware.use(cors());
middleware.use(express.urlencoded({ extended: true }));
middleware.use(express.json());
middleware.use(favicon(path.join(__dirname, '../../public/icons/circulo.ico')));
middleware.use(fileUpload());
middleware.use('/p', express.static(path.join(__dirname, '../../public')));
middleware.use('/', router);

export default middleware;
