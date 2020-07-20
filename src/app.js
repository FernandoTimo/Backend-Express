import express from 'express';
import middlewares from './middleware/middleware';
const app = express();
app.use(middlewares);
export default app;
