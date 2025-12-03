import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Example route: read rows from a `users` table
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email FROM users ORDER BY id'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('DB query error', err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
