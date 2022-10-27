import { HttpStatus } from '@nestjs/common';

export default interface IAPIResponseBase<T> {
  error: boolean;
  message: string;
  statusCode: HttpStatus;
  errorCode: number;
  result: T | any;
  timestamp: string;
}

export class ApiResponse<T> implements IAPIResponseBase<T> {
  public error = false;
  public message = 'OK';
  public statusCode: number = HttpStatus.OK;
  public errorCode: number = null;
  public result: T = null;
  public timestamp = new Date().toISOString();

  constructor(result: T = null, message = 'OK') {
    this.result = result;
    this.message = message;
  }

  setError(
    errorCode: number,
    errorMessage: string,
    statusCode: number = HttpStatus.OK,
  ) {
    this.error = true;
    this.errorCode = errorCode;
    this.message = errorMessage;
    this.statusCode = statusCode;

    return this;
  }

  toJSON(): IAPIResponseBase<T> {
    return {
      error: this.error,
      message: this.message,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      result: this.result,
      timestamp: this.timestamp,
    };
  }
}
