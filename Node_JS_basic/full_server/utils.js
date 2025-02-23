import fs from 'fs/promises';

export async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.trim());
        const students = lines.slice(1); // Skip header

        const studentGroups = {};

        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (firstname && field) {
                if (!studentGroups[field]) {
                    studentGroups[field] = [];
                }
                studentGroups[field].push(firstname);
            }
        });

        return studentGroups;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}
