import { Router } from 'express';
const routes = Router();

routes.route('/').get((req, res) => {
  res.json({ saludo: 'Hola Master Branch' });
});

export default routes;
