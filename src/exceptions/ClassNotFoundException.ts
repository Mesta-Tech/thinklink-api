import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class ClassNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ErrorCodes.CLASS_NOT_FOUND_OR_NOT_AUTHORIZED);
  }
}
