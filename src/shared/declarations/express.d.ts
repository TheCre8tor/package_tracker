import {Logger} from 'bunyan';
import {Request, Express} from 'express';

declare global {
	namespace Express {
		interface Request {
			log: Logger;
		}
	}
}
