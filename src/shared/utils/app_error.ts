export class AppError extends Error {
  readonly status: string;
  readonly isOperational: boolean;

  constructor(
    public readonly message: string,
    public readonly statusCode: number,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
