import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import { db, connection } from './db';

await migrate(db, { migrationsFolder: '@/migrations' });
