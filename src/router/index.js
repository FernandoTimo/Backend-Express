import { Router } from 'express';
const routes = Router();

routes.route('/').get((req, res) => {
  res.json({ saludo: 'carecaca' });
});

export default routes;
