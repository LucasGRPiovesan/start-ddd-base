export class AppException extends Error {
  public readonly statusCode: number;
  public readonly name: string;

  constructor(message: string, statusCode = 500, name = 'AppException') {
    super(message);
    this.statusCode = statusCode;
    this.name = name;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
  