import { randomUUID } from 'node:crypto';
import type Logger from 'bunyan';
import { type Request, type Response, type NextFunction } from 'express';

export function bunyan_middleware(
  request: Request,
  _response: Response,
  _next: NextFunction,
  log: Logger,
) {
  request.log = log.child({
    req_id: randomUUID(),
  });
}
