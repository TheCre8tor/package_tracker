import http from 'node:http';
import { randomUUID } from 'node:crypto';
import bunyan from 'bunyan';

const logger = bunyan.createLogger({
  name: 'APPLICATION_ROOT',
  src: false,
  level: 'trace',
  serializers: bunyan.stdSerializers,
});

export const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ data: 'It works!' }));
});

server.listen(3001, () => {
  const trace = logger.child({ req_id: randomUUID() });

  trace.info('We are running on port: 3000');
  trace.warn('We found the bug');

  const someError = new Error('Ooops! Something went wrong :(');
  trace.error(someError, 'Something went wrong');
});
