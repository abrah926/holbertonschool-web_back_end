const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file data into lines and filter out any empty lines
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    // Ensure there is at least one line (the header)
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract the headers (the first line)
    const headers = lines[0].split(',');

    // Find the index of the 'field' and 'firstname' columns
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    // Create an object to hold the students by their field
    const studentsByField = {};

    // Loop through the remaining lines (students)
    lines.slice(1).forEach(line => {
      const fields = line.split(',');

      // Ensure there are enough fields (at least 4 for name, lastname, age, field)
      if (fields.length >= 4) {
        const firstName = fields[firstNameIndex].trim();
        const field = fields[fieldIndex].trim();

        // Skip any rows with missing or invalid data
        if (firstName && field) {
          // If the field doesn't exist, create it
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          // Add the student's first name to the corresponding field
          studentsByField[field].push(firstName);
        }
      }
    });

    // Count the total number of students
    const totalStudents = Object.values(studentsByField).reduce((sum, students) => sum + students.length, 0);

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in studentsByField) {
      const studentList = studentsByField[field].join(', ');
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentList}`);
    }

  } catch (error) {
    // Handle error if the file can't be read
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
