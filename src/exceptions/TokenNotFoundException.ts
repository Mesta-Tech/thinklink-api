import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class TokenNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ErrorCodes.TOKEN_NOT_FOUND);
  }
}
