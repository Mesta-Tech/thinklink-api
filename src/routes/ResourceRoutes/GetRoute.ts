import { BookController, MovieController, MusicController } from '../../controllers';
import { Router } from 'express';

const Get = (): Router => {
  const GetRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  GetRoute.get('/book', bookController.get);
  GetRoute.get('/movie', movieController.get);
  GetRoute.get('/music', musicController.get);
  return GetRoute;
};

export default Get;
