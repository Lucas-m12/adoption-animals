import {Router} from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UsersController from './controllers/UsersController';
import AdoptionController from './controllers/AdoptionController';

import authMiddleware from './middlewares/authMiddleware';

const routes = Router();
const uploads = multer(multerConfig);

routes.post('/users', UsersController.store)

  .get('adoption', authMiddleware, AdoptionController.index)
  .post('/adoption', authMiddleware, uploads.single('image'), AdoptionController.store);


export default routes;