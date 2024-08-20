// Import the 'readline' module to handle input from stdin
const readline = require('readline');

// Create an interface for input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.question('', (input) => {
  // Output the user's name
  console.log(`Your name is: ${input}`);
  
  // Close the readline interface and output the closing message
  rl.close();
  console.log('This important software is now closing');
});
