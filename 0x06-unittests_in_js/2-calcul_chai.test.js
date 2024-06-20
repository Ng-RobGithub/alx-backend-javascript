// 2-calcul_chai.test.js
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the subtraction of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Edge cases', () => {
    it('should handle negative numbers correctly', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(3);
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.3);
    });
  });
});
