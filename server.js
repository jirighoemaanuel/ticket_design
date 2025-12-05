import express from 'express';
import client from './db.js';
import redisClient from './redis.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
