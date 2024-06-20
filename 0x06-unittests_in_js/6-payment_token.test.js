// 6-payment_token.test.js
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with {data: "Successful response from the API"} when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error); // Fail the test if there's an error
      });
  });

  it('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected, but it was resolved'));
      })
      .catch(() => {
        // As expected, the promise should be rejected when success is false
        done();
      });
  });
});
