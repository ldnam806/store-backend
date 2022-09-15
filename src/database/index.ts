import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: String(process.env.POSTGRES_USER),
  host: String(process.env.POSTGRES_HOST),
  database: String(process.env.POSTGRES_DB_NAME),
  password: String(process.env.POSTGRES_PWD),
  port: Number(process.env.POSTGRES_PORT)
});

pool.on('error', (error: Error) => {
  console.error(`Error: ${error.message}`);
});

export default pool;
