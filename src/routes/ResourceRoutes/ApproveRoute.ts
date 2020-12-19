import { Router } from 'express';
import { notImplemented } from '../../helpers/notImplemented';

const Approve = (): Router => {
  const ApproveRoute = Router();
  ApproveRoute.post('/book', notImplemented);
  ApproveRoute.post('/movie', notImplemented);
  ApproveRoute.post('/music', notImplemented);
  return ApproveRoute;
};

export default Approve;
