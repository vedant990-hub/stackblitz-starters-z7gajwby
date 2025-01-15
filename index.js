require('dotenv').config(); // Load environment variables

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  // Conditionally send different responses based on IS_ADMIN variable
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, vedant", data: ["hello "] });
  } else {
    res.send({ message: "Welcome, vedant", data: ["bye"] });
  }
});

app.listen(port, () => {
  console.log(` Server is running on port 3000: http://localhost:${port}`);
  
});