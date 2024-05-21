import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schemas/schema';
import Config from '../configs/configuration';
import Logger from 'bunyan';

import { DefaultLogger, LogWriter, Logger as DrizzleLogger } from 'drizzle-orm';

export class ClassicLogger implements DefaultLogger {
  writer: LogWriter;

  constructor(
    private readonly logger: Logger,
    config?: {
      writer: LogWriter;
    },
  ) {}

  logQuery(query: string, params: unknown[]): void {
    this.logger.info(`${query}`);
  }
}

export const pool = new Pool({
  host: Config.DATABASE_HOST,
  user: Config.DATABASE_USERNAME,
  password: Config.DATABASE_PASSWORD,
  database: Config.DATABASE_NAME,
});

export function connect(logger: DrizzleLogger) {
  const database = drizzle(pool, { schema, logger });
  return database;
}
