const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];

  if (!database) {
    res.send('This is the list of our students\n');
    return;
  }

  const filePath = path.resolve(database);
  readDatabase(filePath)
    .then((report) => {
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line);
      const students = {};
      let totalStudents = 0;

      for (const line of lines) {
        if (line.trim()) {
          const [firstName, field] = line.split(',');
          if (students[field]) {
            students[field].push(firstName);
          } else {
            students[field] = [firstName];
          }
          totalStudents += 1;
        }
      }

      let report = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(students)) {
        report += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(report.trim());
    });
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
