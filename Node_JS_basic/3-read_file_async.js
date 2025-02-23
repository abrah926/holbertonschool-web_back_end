const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {

        reject(new Error('Cannot load the database'));
        return;
      }

      try {

        const lines = data.split('\n').filter((line) => line.trim().length > 0);

        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const header = lines[0].split(',');
        const fieldIndex = header.indexOf('field');
        const firstNameIndex = header.indexOf('firstname');

        if (fieldIndex === -1 || firstNameIndex === -1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const students = lines.slice(1).map((line) => line.split(','));
        const fields = {};

        students.forEach((student) => {
          const field = student[fieldIndex];
          const firstName = student[firstNameIndex];

          if (field && firstName) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          }
        });

        const totalStudents = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      } catch {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;