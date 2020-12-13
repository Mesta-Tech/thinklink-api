import { Express } from 'express';
import Auth from './AuthRoute';
import TestRoute from './TestRoute';

export default (app: Express): Express => {
  app.use(Auth());
  app.use('/test', TestRoute());
  return app;
};
