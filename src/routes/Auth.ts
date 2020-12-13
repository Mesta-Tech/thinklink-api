import express from 'express';
import AuthController from '../controllers/AuthController';
import authenticate from '../middlewares/authenticate';
import hashPassword from '../middlewares/hashPassword';

const Auth = () => {
  const AuthRoute = express.Router();
  AuthRoute.use('/login', hashPassword, AuthController.login);
  AuthRoute.use('/signup', AuthController.signup);
  AuthRoute.use('/signout', authenticate, AuthController.signout);
  return AuthRoute;
};

export default Auth;
