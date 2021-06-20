import express from 'express';
import middlewares from './middlewares/Index.middleware';
const app = express();
app.use(middlewares);
export default app;
