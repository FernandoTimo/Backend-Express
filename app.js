import express from 'express';
import middlewares from './src/middlewares/global.middleware';
const app = express();
app.use(middlewares);
export default app;
