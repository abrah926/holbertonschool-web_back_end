const express = require('express');

const app = express();
const PORT = 1245;

// Define route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

// Export the app
module.exports = app;
