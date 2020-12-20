import { createConnection } from 'typeorm';
import express, { Application } from 'express';
import DotEnv from 'dotenv';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';
import registerErrorHandlers from './exceptionhandlers';

export default async (): Promise<Application> => {
  DotEnv.config({ path: '../.env' });

  try {
    await createConnection();
  } catch (err) {
    throw new Error(`DATABASE HATASI ${err as string}`);
  }

  const app = express();

  // * Middlewares
  registerMiddlewares(app);

  // * Routes
  registerRoutes(app);

  // * Error Handlers
  registerErrorHandlers(app);

  // * Database Connection

  return app;
};
