import type Logger from 'bunyan';
import express, { Request, Response, NextFunction, Express } from 'express';
import { AppError } from '../shared/utils/app_error';
import { bunyan_middleware } from '../shared/middlewares/bunyan_middleware';

export class App {
  readonly server: Express;

  constructor(private readonly logger: Logger) {
    this.server = express();

    this.server.use(
      (request: Request, response: Response, next: NextFunction) => {
        bunyan_middleware(request, response, next, this.logger);
        next();
      },
    );

    this.server.get('/', (request: Request, response: Response) => {
      request.log.info('Logger is working as express');
      request.log.error("We are checking it's working as expected");

      response.send("It's working...");
    });

    this.server.all('*', (request, response, next) => {
      request.log.error(`Can't find ${request.originalUrl} on this server`);
      next(
        new AppError(`Can't find ${request.originalUrl} on this server`, 404),
      );
    });
  }
}
