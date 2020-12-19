import { Router } from 'express';
import { notImplemented } from '../../helpers/notImplemented';

const Remove = (): Router => {
  const RemoveRoute = Router();
  RemoveRoute.post('/book', notImplemented);
  RemoveRoute.post('/movie', notImplemented);
  RemoveRoute.post('/music', notImplemented);
  return RemoveRoute;
};

export default Remove;
