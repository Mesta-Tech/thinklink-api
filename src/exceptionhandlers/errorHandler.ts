import { ErrorRequestHandler } from 'express';
import HttpException from '../exceptions/HttpException';

const errorHandler: ErrorRequestHandler = (err: HttpException, _req, res, _next): void => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).send({
    status,
    message,
  });
};

export default errorHandler;
