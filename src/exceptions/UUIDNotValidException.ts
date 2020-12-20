import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class UUIDNotValidException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ErrorCodes.UUID_NOT_VALID);
  }
}
