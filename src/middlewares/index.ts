import { Request, Response, Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';
import errorHandler from '../exceptionhandlers/errorHandler';
import getEnv from '../helpers/getEnv';

const registerMiddlewares = (app: Express): void => {
  if (getEnv('NODE_ENV') === 'DEVELOPMENT') {
    app.use(morgan<Request, Response>('tiny', {}));
  }
  app.use(cors<Request>());
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(helmet());
  app.use(errorHandler);
};

export default registerMiddlewares;
