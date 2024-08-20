const http = require('http');

// Create the server and assign it to 'app'
const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
