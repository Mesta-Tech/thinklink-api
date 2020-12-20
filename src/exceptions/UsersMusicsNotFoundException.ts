import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class UsersMusicsNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ErrorCodes.USERS_MUSICS_NOT_FOUND);
  }
}
