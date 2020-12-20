import { BookController, MovieController, MusicController } from '../../controllers';
import { Router } from 'express';

const Deny = (): Router => {
  const DenyRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  DenyRoute.post('/book', bookController.deny);
  DenyRoute.post('/movie', movieController.deny);
  DenyRoute.post('/music', musicController.deny);
  return DenyRoute;
};

export default Deny;
