import express from 'express';
import client from './db.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Example route: read rows from a `users` table
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM seats');
    res.json(result.rows);
  } catch (err) {
    console.error('DB query error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
