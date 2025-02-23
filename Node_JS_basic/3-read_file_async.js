const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines
            const students = lines.slice(1); // Skip header

            const studentCount = students.length;
            console.log(`Number of students: ${studentCount}`);

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

            for (const [field, names] of Object.entries(fields)) {
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
