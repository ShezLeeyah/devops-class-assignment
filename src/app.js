const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'DevOps Class Assignment App',
    status: 'running',
    environment: {
      dbHost: process.env.DB_HOST || 'not set',
      dbUser: process.env.DB_USER || 'not set',
      apiKeyPresent: !!process.env.API_KEY
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});