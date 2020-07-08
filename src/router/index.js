import { Router } from 'express';
const routes = Router();

routes.route('/').get((req, res) => {
  res.json({ saludo: 'Hola Mundo' });
});

export default routes;
