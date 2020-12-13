import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class PasswordInvalidException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, ErrorCodes.WRONG_PASSWORD);
  }
}
