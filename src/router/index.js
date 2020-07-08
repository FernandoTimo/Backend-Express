import { Router } from 'express';
const routes = Router();

import get from '../Controllers/get';
import post from '../Controllers/post';
import put from '../Controllers/put';
import remove from '../Controllers/remove';

routes
  .route('/')
  .get(get.user)
  .post(post.user)
  .put(put.user)
  .delete(remove.user);

export default routes;
