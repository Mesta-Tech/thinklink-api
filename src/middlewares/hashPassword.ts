import bcrypt from 'bcrypt';
import { RequestHandlerT } from '../typings';

const hashPassword: RequestHandlerT<{ password: string }> = (req, _res, next) => {
  const pass = req.body.password;

  if (pass) {
    req.body.password = bcrypt.hashSync(pass, 10);
  }
  next();
};
export default hashPassword;
