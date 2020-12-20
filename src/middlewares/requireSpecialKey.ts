import { RequestHandlerT } from '../typings';

const requireSpecialKey = (): RequestHandlerT => (_req, _res, next) => {
  // TODO implement for only admins routes
  next();
};

export default requireSpecialKey;
