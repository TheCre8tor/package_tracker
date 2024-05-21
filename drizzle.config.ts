import {defineConfig} from 'drizzle-kit';
import Config from './src/configs/configuration';

export default defineConfig({
	dialect: 'postgresql',
	schema: 'src/database/schemas/schema.ts',
	out: 'src/database/migrations',
	dbCredentials: {
		host: Config.DATABASE_HOST,
		port: Config.DATABASE_PORT,
		database: Config.DATABASE_NAME,
		password: Config.DATABASE_PASSWORD,
		ssl: Config.DATABASE_SSL,
	},
	verbose: true,
	strict: true,
});
