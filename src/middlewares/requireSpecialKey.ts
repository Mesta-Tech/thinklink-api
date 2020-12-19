import { RequestHandler } from '../typings';

const requireSpecialKey = (): RequestHandler => (_req, _res, next) => {
  // TODO implement for only admins routes
  next();
};

export default requireSpecialKey;
