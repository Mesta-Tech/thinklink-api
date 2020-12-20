import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class EntityNotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ErrorCodes.NOT_FOUND);
  }
}
