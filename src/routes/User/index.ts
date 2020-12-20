import { Router } from 'express';
import { AddMapper } from './AddMapper';
import { EditMapper } from './EditMapper';
import { RemoveMapper } from './RemoveMapper';

const User = (): Router => {
  const UserRoute = Router();
  UserRoute.use('/add', AddMapper);
  UserRoute.use('/remove', RemoveMapper);
  UserRoute.use('/edit', EditMapper);
  return UserRoute;
};

export default User;
