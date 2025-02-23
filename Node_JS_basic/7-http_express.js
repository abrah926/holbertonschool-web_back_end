const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const databaseFile = process.argv[2]; // Get the database file from command-line arguments

// Function to count students from the CSV file
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header line

      const studentCount = students.length;
      const fields = {};

      students.forEach((line) => {
        const student = line.split(',');
        if (student.length >= 4) {
          const firstName = student[0].trim();
          const field = student[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      });

      let output = `Number of students: ${studentCount}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

// Route for "/"
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  countStudents(databaseFile)
    .then((output) => {
      res.end(output);
    })
    .catch((err) => {
      res.status(500).end(err.message);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});

// Export the app
module.exports = app;
