// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // Normally you would handle errors here, but for this exercise, we do nothing
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
  