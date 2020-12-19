import requireSpecialKey from '../../middlewares/requireSpecialKey';
import authenticateToken from '../../middlewares/authenticate';
import Approve from './ApproveRoute';
import Remove from './RemoveRoute';
import { Router } from 'express';
import Edit from './EditRoute';
import Add from './AddRoute';

const Resource = (): Router => {
  const ResourceRoute = Router();
  ResourceRoute.use('/add', Add());
  ResourceRoute.use('/remove', authenticateToken(), Remove());
  ResourceRoute.use('/approve', authenticateToken(), requireSpecialKey(), Approve());
  ResourceRoute.use('/edit', authenticateToken(), Edit());
  return ResourceRoute;
};

export default Resource;
