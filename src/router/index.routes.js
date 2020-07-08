import { Router } from 'express';
const routes = Router();

import get from '../Controllers/get';

routes.route('/').get(get.example);

export default routes;
