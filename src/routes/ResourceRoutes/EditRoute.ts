import { Router } from 'express';
import { notImplemented } from '../../helpers/notImplemented';

const Edit = (): Router => {
  const EditRoute = Router();
  EditRoute.post('/book', notImplemented);
  EditRoute.post('/movie', notImplemented);
  EditRoute.post('/music', notImplemented);
  return EditRoute;
};

export default Edit;
