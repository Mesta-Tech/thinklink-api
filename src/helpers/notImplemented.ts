import { Response } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';

export const notImplemented = (res: Response<any, number>) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).send('NOT_IMPLEMENTED');
};
