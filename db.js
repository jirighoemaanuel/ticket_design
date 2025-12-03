// db.js
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  user: 'postgres',
  host: 'localhost', // or your database host
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432, // default PostgreSQL port
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err) => console.error('Error connecting to PostgreSQL:', err));

export default client;
