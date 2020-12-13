import { StatusCodes } from 'http-status-codes';

export default class HttpException extends Error {
  public status: StatusCodes;
  public message: string;
  constructor(status: StatusCodes, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
