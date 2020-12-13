import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class MissingPropertyException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ErrorCodes.MISSING_PROP);
  }
}
