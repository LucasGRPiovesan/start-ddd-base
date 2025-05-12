export class Result<T> {
  private constructor(
    public readonly statusCode: number,
    public readonly isSuccess: boolean,
    public readonly data?: T,
    public readonly error?: string,
  ) {}

  public static success<U>(data: U, statusCode:number = 200): Result<U> {
    return new Result<U>(statusCode, true, data, undefined);
  }

  public static error<U>(message: string, statusCode: number): Result<U> {
    return new Result<U>(statusCode, false, undefined, message);
  }
}
