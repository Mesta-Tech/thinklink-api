import { RequestHandler } from 'express';
import { notImplemented } from '../helpers/notImplemented';

export default class AuthController {
  static login: RequestHandler = async (_req, res) => notImplemented(res);

  static signup: RequestHandler = async (_req, res) => notImplemented(res);

  static signout: RequestHandler = async (_req, res) => notImplemented(res);
}
