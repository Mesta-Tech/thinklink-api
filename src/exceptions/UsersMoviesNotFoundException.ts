import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class UsersMoviesNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ErrorCodes.USERS_MOVIES_NOT_FOUND);
  }
}
