import { BookController, MovieController, MusicController } from '../../controllers';
import { Router } from 'express';

const Approve = (): Router => {
  const ApproveRoute = Router();
  const bookController = new BookController();
  const musicController = new MusicController();
  const movieController = new MovieController();
  ApproveRoute.post('/book', bookController.approve);
  ApproveRoute.post('/movie', movieController.approve);
  ApproveRoute.post('/music', musicController.approve);
  return ApproveRoute;
};

export default Approve;
