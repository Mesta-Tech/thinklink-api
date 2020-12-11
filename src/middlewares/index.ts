import { Request, Response, Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { urlencoded, json } from 'body-parser';
import cors from 'cors';

const registerMiddlewares = (app: Express): void => {
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    app.use(morgan<Request, Response>('tiny', {}));
  }
  app.use(cors<Request>());
  app.use(urlencoded());
  app.use(json());
  app.use(helmet());
};

export default registerMiddlewares;
