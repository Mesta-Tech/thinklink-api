import { Express } from 'express';
import authenticate from '../middlewares/authenticate';
import Auth from './AuthRoute';
import Resource from './ResourceRoutes';
import TestRoute from './TestRoute';
import User from './User';

export default (app: Express): Express => {
  app.use('/auth', Auth());
  app.use('/user', authenticate(), User());
  app.use('/resource', Resource());
  app.use('/test', TestRoute());
  return app;
};
