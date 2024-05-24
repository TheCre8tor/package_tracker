import {env} from 'node:process';
import {config} from 'dotenv';
import {bunyanParser} from '../shared/utils/bunyan_parser';

config();

const {
	APP__NODE_ENV,
	APP__LOG_LEVEL,
	APP__PORT,
	APP__SERVICE_NAME,
	APP__BASE_URL,
	APP__DATABASE_HOST,
	APP__DATABASE_PORT,
	APP__DATABASE_USERNAME,
	APP__DATABASE_PASSWORD,
	APP__DATABASE_NAME,
	APP__DATABASE_SSL,
} = env;

const Config = {
	NODE_ENV: APP__NODE_ENV ?? '__no_env__',
	LOG_LEVEL: bunyanParser(APP__LOG_LEVEL),
	PORT: Number.parseInt(APP__PORT!, 10) ?? 3000,
	SERVICE_NAME: APP__SERVICE_NAME ?? '__no_name__',
	BASE_URL: APP__BASE_URL!,
	DATABASE_HOST: APP__DATABASE_HOST!,
	DATABASE_PORT: Number(APP__DATABASE_PORT),
	DATABASE_USERNAME: APP__DATABASE_USERNAME!,
	DATABASE_PASSWORD: APP__DATABASE_PASSWORD!,
	DATABASE_NAME: APP__DATABASE_NAME!,
	DATABASE_SSL: APP__DATABASE_SSL === 'true',
};

export default Config;
