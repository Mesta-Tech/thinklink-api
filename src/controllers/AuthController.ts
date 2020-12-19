import EmailAlreadyExistsException from '../exceptions/EmailAlreadyExistsException';
import PasswordInvalidException from '../exceptions/PasswordInvalidException';
import MissingPropertyException from '../exceptions/MissingPropertyException';
import UserNotFoundException from '../exceptions/UserNotFoundException';
import { notImplemented } from '../helpers/notImplemented';
import nullishPassword from '../helpers/nullishPassword';
import TokenController from './TokenController';
import { StatusCodes } from 'http-status-codes';
import { User, UserT } from '../entities/User';
import { RequestHandler } from '../typings';
import { getRepository } from 'typeorm';
import { compareSync } from 'bcrypt';

export default class AuthController {
  static login: RequestHandler<{ email: string; password: string }> = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email);
    if (user) {
      if (compareSync(password, user.password)) {
        const token = await TokenController.generateToken(user);
        token.user = nullishPassword(token.user);
        res.send(token);
      } else {
        next(new PasswordInvalidException());
      }
    } else {
      next(new UserNotFoundException());
    }
  };

  static signup: RequestHandler<UserT> = async (req, res, next) => {
    const uRepo = getRepository(User);
    const { body: user } = req;
    let userModel = uRepo.create(user);
    try {
      userModel = await uRepo.save(userModel);
      const token = await TokenController.generateToken(userModel);
      res.status(StatusCodes.OK).send(token);
    } catch (err: unknown) {
      if ((err as Error).message.match(/duplicate/g)) next(new EmailAlreadyExistsException());
      if ((err as Error).message.match(/null value/g)) next(new MissingPropertyException());
      next(err);
    }
  };

  static signout: RequestHandler = (_req, res) => {
    //TODO implement should delete the related token
    notImplemented(res);
  };
}
