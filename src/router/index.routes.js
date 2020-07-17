import { Router } from 'express';
const routes = Router();

import Get from '../Controllers/GET/index.get';
import Post from '../Controllers/POST/index.post';
import Put from '../Controllers/PUT/index.put';
import Delete from '../Controllers/DELETE/index.delete';
import { BadUrl } from '../Controllers/index.controller';

routes.route('/').get(Get).post(Post).put(Put).delete(Delete);
routes.route('*').get(BadUrl);

export default routes;
