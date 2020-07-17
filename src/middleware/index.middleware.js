import express from 'express';
const middleware = express();
// import module from '../../public/'
import path from 'path';
import favicon from 'serve-favicon';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import session from 'express-session';
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
middleware.use(favicon(path.join(__dirname, '../../public/icons/favicon.ico')));
middleware.use(fileUpload());
middleware.use('/p', express.static(path.join(__dirname, '../../public')));

export default middleware;
