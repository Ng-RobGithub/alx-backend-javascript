import fs from 'fs';

/**
 * Reads the database file and returns the students grouped by their fields.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the students.
 * @author Ng-Rob Agomuonso <https://github.com/Ng-RobGithub>
 */
export const readDatabase = (dataPath) => {
  return new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.toString().trim();
      if (!content) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = content.split('\n');
      const headers = lines[0].split(',');

      const students = {};
      lines.slice(1).forEach(line => {
        const studentData = line.split(',');
        const field = studentData[studentData.length - 1];
        const student = headers.reduce((acc, header, index) => {
          acc[header] = studentData[index];
          return acc;
        }, {});

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(student.firstname);
      });

      resolve(students);
    });
  });
};
