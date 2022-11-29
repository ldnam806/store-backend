import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const {
  PG_HOST,
  PG_DEV_DB,
  PG_USER,
  PG_PASSWORD,
  PG_TEST_DB,
  PG_PORT,
  ENV,
} = process.env;

let db = new Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DEV_DB,
  password: PG_PASSWORD,
  port: Number(PG_PORT),
});

if (ENV === 'test') {
  db = new Pool({
    user: PG_USER,
    host: PG_HOST,
    database: PG_TEST_DB,
    password: PG_PASSWORD,
    port: Number(PG_PORT),
  });
}

export default db;