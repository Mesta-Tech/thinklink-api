import { Application } from 'express';
import errorHandler from './errorHandler';

const registerErrorHandlers = (app: Application): void => {
  app.use(errorHandler);
};
export default registerErrorHandlers;
