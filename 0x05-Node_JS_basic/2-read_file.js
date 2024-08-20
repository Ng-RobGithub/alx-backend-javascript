const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');
    
    // Split the data into lines
    const lines = data.trim().split('\n');

    // Remove header
    const header = lines.shift();

    // Parse the CSV lines
    const students = lines.map(line => {
      const [field, firstName] = line.split(',');
      return { field, firstName };
    });

    // Filter out any empty lines
    const validStudents = students.filter(student => student.field && student.firstName);

    // Count the total number of students
    const totalStudents = validStudents.length;
    console.log(`Number of students: ${totalStudents}`);

    // Create a map to count students by field
    const fieldMap = validStudents.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstName);
      return acc;
    }, {});

    // Print the number of students and list for each field
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Handle errors, e.g., file not found or other issues
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
