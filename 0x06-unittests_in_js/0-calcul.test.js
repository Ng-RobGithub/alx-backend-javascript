// 0-calcul.test.js
// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round the first argument', () => {
    assert.strictEqual(calculateNumber(1.0, 0), 1);
    assert.strictEqual(calculateNumber(1.3, 0), 1);
    assert.strictEqual(calculateNumber(1.7, 0), 2);
  });

  it('should round the second argument', () => {
    assert.strictEqual(calculateNumber(0, 1.0), 1);
    assert.strictEqual(calculateNumber(0, 1.3), 1);
    assert.strictEqual(calculateNumber(0, 1.7), 2);
  });

  it('should round both arguments and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1.3, 0), 1);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(1.3, 1.3), 2);
    assert.strictEqual(calculateNumber(1.7, 1.2), 3);
    assert.strictEqual(calculateNumber(1.3, 1.8), 3);
    assert.strictEqual(calculateNumber(1.6, 1.8), 4);
  });
});
