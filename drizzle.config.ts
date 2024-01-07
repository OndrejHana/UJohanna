import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
	schema: './lib/schema.ts',
	out: './migrations',
	driver: 'mysql2',
	dbCredentials: {
		host: process.env.DATABASE_HOST as string,
		user: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME as string
	}
} satisfies Config;
