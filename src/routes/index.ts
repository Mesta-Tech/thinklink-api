import { Express } from 'express';
import Auth from './AuthRoute';
import Resource from './ResourceRoutes';
import TestRoute from './TestRoute';

export default (app: Express): Express => {
  app.use('/auth', Auth());
  app.use('/resource', Resource());
  app.use('/test', TestRoute());
  return app;
};
