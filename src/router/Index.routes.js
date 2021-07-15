import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/global.controller';
import { Auth } from '../middlewares/auth.middleware';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadUrl);

export default routes;
