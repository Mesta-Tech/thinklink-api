import { BookController, MovieController, MusicController } from '../../controllers';
import { Router } from 'express';

const Edit = (): Router => {
  const EditRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  EditRoute.post('/book', bookController.edit);
  EditRoute.post('/movie', movieController.edit);
  EditRoute.post('/music', musicController.edit);
  return EditRoute;
};

export default Edit;
