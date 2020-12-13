import { createConnection } from 'typeorm';
import express from 'express';
import DotEnv from 'dotenv';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';
// import getEntities from './helpers/getEntities';

export default async () => {
  DotEnv.config({ path: '../.env' });

  const app = express();

  // * Middlewares
  registerMiddlewares(app);

  // * Routes
  registerRoutes(app);

  // * Database Connection
  try {
    await createConnection();
  } catch (err) {
    throw new Error(`DATABASE HATASI ${err}`);
  }

  return app;
};
