// api.test.js
const chai = require('chai');
const axios = require('axios');
const { expect } = chai;
const app = require('./api'); // Import the app from api.js

const PORT = 7865;
const BASE_URL = `http://localhost:${PORT}`;

let server;

// Start the server before running tests
before((done) => {
  server = app.listen(PORT, done);
});

// Close the server after running tests
after((done) => {
  server.close(done);
});

describe('Index page', () => {
  it('Correct status code', async () => {
    const response = await axios.get(`${BASE_URL}/`);
    expect(response.status).to.equal(200);
  });

  it('Correct result', async () => {
    const response = await axios.get(`${BASE_URL}/`);
    expect(response.data).to.equal('Welcome to the payment system');
  });
});

