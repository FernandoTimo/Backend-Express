import { Router } from 'express';
const routes = Router();

// MIDDLEWARES
import { Auth } from '../middlewares/auth.middleware';

// ROUTES

import { Index, BadRequest } from '../controllers/global.controller';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadRequest);

export default routes;
