// 3-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
    assert(consoleSpy.calledOnceWithExactly('The total is: 120'));

    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
