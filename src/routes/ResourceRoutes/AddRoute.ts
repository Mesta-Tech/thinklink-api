import { Router } from 'express';
import BookController from '../../controllers/BookController';
import { notImplemented } from '../../helpers/notImplemented';

const Add = (): Router => {
  const AddRoute = Router();
  const bookController = new BookController();
  AddRoute.post('/book', bookController.create);
  AddRoute.post('/movie', notImplemented);
  AddRoute.post('/music', notImplemented);
  return AddRoute;
};

export default Add;
