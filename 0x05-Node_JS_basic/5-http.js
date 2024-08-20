const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        
        // Assuming the file path is provided as the first argument
        const database = process.argv[2];
        countStudents(database)
            .then((output) => {
                res.end(output);
            })
            .catch((err) => {
                res.end(err.message);
            });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

module.exports = app;
