import { Express } from 'express';
import Auth from './Auth';

export default (app: Express): Express => {
  app.use(Auth());
  return app;
};
