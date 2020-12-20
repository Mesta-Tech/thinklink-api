import requireSpecialKey from '../../middlewares/requireSpecialKey';
import authenticateToken from '../../middlewares/authenticate';
import Approve from './ApproveRoute';
import Remove from './RemoveRoute';
import { Router } from 'express';
import Edit from './EditRoute';
import Add from './AddRoute';
import Deny from './DenyRoute';
import Get from './GetRoute';

const Resource = (): Router => {
  const ResourceRoute = Router();
  ResourceRoute.use('/add', Add());
  ResourceRoute.use('/remove', authenticateToken(), Remove());
  ResourceRoute.use('/approve', authenticateToken(), requireSpecialKey(), Approve());
  ResourceRoute.use('/deny', authenticateToken(), requireSpecialKey(), Deny());
  ResourceRoute.use('/edit', authenticateToken(), Edit());
  ResourceRoute.use('/get', authenticateToken(), Get());
  return ResourceRoute;
};

export default Resource;
