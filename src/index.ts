import process from 'node:process';
import bunyan from 'bunyan';
import { bunyanConfig } from './configs/bunyan_config';
import { App } from './app/app';
import Config from './configs/configuration';

const start = () => {
  const logger = bunyan.createLogger(bunyanConfig);

  process.on('uncaughtException', (error) => {
    logger.info(`${error.name}: ${error.message.replace(' :', ',')}`);
    logger.info('Uncaught Exception!, Shutting down...');
    process.exit(1);
  });

  const app = new App(logger);

  // SERVER RUNNER -->
  const server = app.server.listen(Config.PORT, () => {
    logger.info(`App running on ${Config.PORT}...`);
  });

  // GLOBAL UNHANDLED REJECTION - ERROR HANDLING -->
  process.on('unhandledRejection', (error: Error) => {
    logger.info(`${error.name}: ${error.message.replace(' :', ',')}`);
    logger.info('Unhandeled Rejection!, Shutting down...');

    server.close(() => {
      process.exit(1);
    });
  });

  process.on('SIGTERM', () => {
    logger.info('🧐 SIGTERM RECEIVED. Shutting down gracefully!');
    server.close(() => {
      logger.info('🔥 Process Terminated!');
    });
  });
};

start();
