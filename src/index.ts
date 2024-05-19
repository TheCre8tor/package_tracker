import process from 'node:process';
import bunyan from 'bunyan';
import Config from './configs/configuration';
import {bunyanConfig} from './configs/bunyan_config';

// Export const server = http.createServer((request, response) => {
//   response.writeHead(200, { 'content-type': 'application/json' });
//   response.end(JSON.stringify({ data: 'It works!' }));
// });

// server.listen(3001, () => {
//   const trace = logger.child({ req_id: randomUUID() });

//   trace.info('We are running on port: 3000');
//   trace.warn('We found the bug');

//   const someError = new Error('Ooops! Something went wrong :(');
//   trace.error(someError, 'Something went wrong');
// });

const start = () => {
	const logger = bunyan.createLogger(bunyanConfig);

	logger.info(Config.LOG_LEVEL);

	process.on('uncaughtException', (error) => {
		logger.info(`${error.name}: ${error.message.replace(' :', ',')}`);
		logger.info('Uncaught Exception!, Shutting down...');
		process.exit(1);
	});
};

start();
