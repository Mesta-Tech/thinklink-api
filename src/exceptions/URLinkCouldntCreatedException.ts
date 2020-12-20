import { StatusCodes } from 'http-status-codes';
import ErrorCodes from './ErrorCodes';
import HttpException from './HttpException';

export default class URLinkCouldntCreatedException extends HttpException {
  constructor() {
    super(StatusCodes.BAD_REQUEST, ErrorCodes.UR_LINK_COULDNT_CREATED);
  }
}
