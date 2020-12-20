import { BookController, MovieController, MusicController } from '../../controllers';
import { Router } from 'express';

const Remove = (): Router => {
  const RemoveRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  RemoveRoute.post('/book', bookController.remove);
  RemoveRoute.post('/movie', movieController.remove);
  RemoveRoute.post('/music', musicController.remove);
  return RemoveRoute;
};

export default Remove;
