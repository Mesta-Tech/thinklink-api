import bcrypt from 'bcrypt';
import { RequestHandler } from '../typings';

const hashPassword: RequestHandler<{ password: string }> = (req, _res, next) => {
  const pass = req.body.password;

  if (pass) {
    req.body.password = bcrypt.hashSync(pass, 10);
  }
  next();
};
export default hashPassword;
