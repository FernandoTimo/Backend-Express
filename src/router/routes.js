import { Router } from 'express';
const routes = Router();

import Get, { socket } from '../Controllers/GET/get';
import Post from '../Controllers/POST/post';
import Put from '../Controllers/PUT/put';
import Delete from '../Controllers/DELETE/delete';
import { BadUrl } from '../controllers/controller';

routes.route('/').get(Get).post(Post).put(Put).delete(Delete);
routes.route('*').get(BadUrl);

export default routes;
