// 0-console.test.js
const displayMessage = require('./0-console');
const { stdout } = require('test-console');

test('should print the correct message', () => {
    const inspect = stdout.inspect();
    displayMessage('Hello Jest!');
    inspect.restore();
    expect(inspect.output).toEqual(['Hello Jest!\n']);
});
