process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const Nam = process.stdin.read();

  if (Nam) {
    process.stdout.write(`Your name is: ${Nam}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
