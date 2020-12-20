/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StatusCodes } from 'http-status-codes';

export const notImplemented = (req: any, res: any) => {
  console.log({ params: req.params, body: req.body, qs: req.query });
  res.status(StatusCodes.NOT_IMPLEMENTED).send('NOT_IMPLEMENTED');
};
