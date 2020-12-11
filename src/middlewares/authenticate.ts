import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const authenticate: RequestHandler<{ user: any }> = (req, res, next) => {
  console.log('authenticating => ', req.url);
  const authToken = req.header('authorization');
  const verified = jwt.verify(authToken || '', process.env.JWT_SECRET || '');
  if (!verified) {
    return res.status(StatusCodes.FORBIDDEN).send('Method Not Allowed!');
  }

  req.params.user = verified;
  return next();
};
export default authenticate;
