import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class UserNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ErrorCodes.USER_NOT_FOUND);
  }
}
