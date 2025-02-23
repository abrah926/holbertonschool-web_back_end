const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set plain text response
  res.end('Hello Holberton School!');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the app
module.exports = app;
