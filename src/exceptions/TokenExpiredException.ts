import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class TokenExpiredException extends HttpException {
  constructor() {
    super(StatusCodes.FORBIDDEN, ErrorCodes.TOKEN_ERROR);
  }
}
