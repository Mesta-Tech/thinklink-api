import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';

const hashPassword: RequestHandler = (req, _res, next) => {
  const pass = req.body.password;

  if (pass) {
    req.body.password = bcrypt.hashSync(pass, 10);
  }
  next();
};
export default hashPassword;
