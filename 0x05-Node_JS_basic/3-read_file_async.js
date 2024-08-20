const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.promises.readFile(filePath, 'utf8')
            .then((data) => {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const students = lines.slice(1); // Skip the header line
                const numberOfStudents = students.length;

                console.log(`Number of students: ${numberOfStudents}`);

                const fields = {};
                students.forEach((student) => {
                    const [firstName, , , field] = student.split(',');
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(firstName);
                });

                for (const field in fields) {
                    const list = fields[field].join(', ');
                    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
                }

                resolve();
            })
            .catch((error) => {
                reject(new Error('Cannot load the database'));
            });
    });
}

module.exports = countStudents;
