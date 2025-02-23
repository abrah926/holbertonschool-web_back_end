import { readDatabase } from '../utils.js';

const DATABASE_FILE = process.argv[2];

export default class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const studentGroups = await readDatabase(DATABASE_FILE);
            let response = 'This is the list of our students\n';

            Object.keys(studentGroups).sort().forEach((field) => {
                const count = studentGroups[field].length;
                const names = studentGroups[field].join(', ');
                response += `Number of students in ${field}: ${count}. List: ${names}\n`;
            });

            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (!['CS', 'SWE'].includes(major)) {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const studentGroups = await readDatabase(DATABASE_FILE);
            const names = studentGroups[major] || [];
            res.status(200).send(`List: ${names.join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}
