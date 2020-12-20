import { Router } from 'express';
import { MusicController, MovieController } from '../../controllers';
import BookController from '../../controllers/ResourceControllers/BookController';

const Add = (): Router => {
  const AddRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  AddRoute.post('/book', bookController.create);
  AddRoute.post('/movie', movieController.create);
  AddRoute.post('/music', musicController.create);
  return AddRoute;
};

export default Add;
