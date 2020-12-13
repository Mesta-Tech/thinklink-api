import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class EmailAlreadyExistsException extends HttpException {
  constructor(email?: string) {
    super(StatusCodes.CONFLICT, `${email ?? ''} ${ErrorCodes.EMAIL_ALREADY_EXISTS}`);
  }
}
