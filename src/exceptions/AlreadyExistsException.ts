import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class AlreadyExistsException extends HttpException {
  constructor() {
    super(StatusCodes.EXPECTATION_FAILED, ErrorCodes.ALREADY_EXISTS);
  }
}
