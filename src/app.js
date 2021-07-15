import express from 'express';
import middlewares from './middlewares/global.middleware';
const app = express();
app.use(middlewares);
export default app;
