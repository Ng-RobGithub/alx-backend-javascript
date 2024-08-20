const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const students = {};
        let totalStudents = 0;

        lines.forEach((line, index) => {
            if (index !== 0) { // Skip the header
                const [firstname, , , field] = line.split(',');

                if (field) {
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstname);
                    totalStudents++;
                }
            }
        });

        console.log(`Number of students: ${totalStudents}`);
        for (const field in students) {
            console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
