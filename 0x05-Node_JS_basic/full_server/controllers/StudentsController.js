import { readDatabase } from '../utils.js';

/**
 * Controller for handling students-related requests.
 * @author Ng-Rob Agomuonso <https://github.com/Ng-RobGithub>
 */
class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        let responseText = 'This is the list of our students';
        Object.keys(students).sort().forEach(field => {
          const list = students[field].join(', ');
          responseText += `\nNumber of students in ${field}: ${students[field].length}. List: ${list}`;
        });
        res.status(200).send(responseText);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const validMajors = ['CS', 'SWE'];
    
    if (!validMajors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((students) => {
        const list = students[major].join(', ');
        res.status(200).send(`List: ${list}`);
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
