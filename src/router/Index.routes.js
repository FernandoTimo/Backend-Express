import { Router } from 'express';
const routes = Router();

// CONTROLLERS
import { Index, BadRequest } from '../controllers/global.controller';

// MIDDLEWARES
import { Auth } from '../middlewares/auth.middleware';

// -- Index routes
routes.route('/').get(Auth, Index);

// -- Global Routes

// -- 404 Bad request route
routes.route('*').get(BadRequest);

export default routes;
