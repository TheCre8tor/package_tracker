import bunyan, {type LoggerOptions} from 'bunyan';
import Config from './configuration';

export const bunyanConfig: LoggerOptions = {
	name: Config.SERVICE_NAME,
	level: Config.LOG_LEVEL,
	serializers: bunyan.stdSerializers,
};
