import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/controller';
import { Auth } from '../middlewares/Auth';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadUrl);

export default routes;
