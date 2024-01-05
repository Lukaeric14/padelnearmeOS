// server.js

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
const PORT = 3001;

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 3001, // Change the port if needed
});

// Endpoint to fetch data from PostgreSQL
app.get('/api/customers', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM customers'); // Replace 'customers' with your table name
    const customers = result.rows;
    client.release();
    res.json(customers);
  } catch (err) {
    console.error('Error fetching data: ', err);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.get('/test', (req, res) => {
    res.send('Backend connected!');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
