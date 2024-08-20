const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 1245;

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length === 0) {
        reject(new Error('No data in file'));
        return;
      }

      const students = {};
      let numberOfStudents = 0;

      lines.slice(1).forEach((line) => {
        if (line) {
          numberOfStudents += 1;
          const [firstname, , , field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      });

      let output = `Number of students: ${numberOfStudents}\n`;
      for (const field in students) {
        if (students.hasOwnProperty(field)) {
          output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = path.join(__dirname, process.argv[2]);

  countStudents(databaseFile)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
