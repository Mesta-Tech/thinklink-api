import AuthController from '../controllers/AuthController';
import authenticateToken from '../middlewares/authenticate';
import hashPassword from '../middlewares/hashPassword';
import express, { Router } from 'express';

const Auth = (): Router => {
  const AuthRoute = express.Router();
  AuthRoute.post('/login', AuthController.login);
  AuthRoute.post('/signup', hashPassword, AuthController.signup);
  AuthRoute.post('/signout', authenticateToken(), AuthController.signout);
  return AuthRoute;
};

export default Auth;
