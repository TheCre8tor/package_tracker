import {Logger} from 'bunyan';
import {Request} from 'express';

declare global {
	namespace Express {
		interface Request {
			log: Logger;
		}
	}
}
