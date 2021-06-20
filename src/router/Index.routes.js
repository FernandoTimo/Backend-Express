import { Router } from 'express';
const routes = Router();

import { Index, BadUrl } from '../controllers/Index.controller';
import { Auth } from '../middlewares/Auth.middleware';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadUrl);

export default routes;
