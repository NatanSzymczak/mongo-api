const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.get('/', (req, res) => {
  res.send('HOME');
});

// Connect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to database.')
);


app. listen(3000);