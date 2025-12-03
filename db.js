import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL || null;

const pool = new Pool(
  connectionString
    ? {
        connectionString,
        // In production (e.g., Heroku), you may need SSL. Control via NODE_ENV.
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }
    : undefined
);

export default pool;
