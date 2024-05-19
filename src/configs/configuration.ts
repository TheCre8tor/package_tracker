import { env } from 'node:process';
import { config } from 'dotenv';
import { bunyanParser } from '../shared/utils/bunyan_parser';

config();

const { APP__NODE_ENV, APP__LOG_LEVEL, APP__PORT, APP__SERVICE_NAME } = env;

const Config = {
  NODE_ENV: APP__NODE_ENV ?? '__no_env__',
  LOG_LEVEL: bunyanParser(APP__LOG_LEVEL),
  PORT: Number.parseInt(APP__PORT!, 10) ?? 3000,
  SERVICE_NAME: APP__SERVICE_NAME ?? '__no_name__',
};

export default Config;
