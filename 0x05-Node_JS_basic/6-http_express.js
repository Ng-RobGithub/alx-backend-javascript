const express = require('express');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.use((req, res) => {
    res.status(404).send('Cannot GET ' + req.originalUrl);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
