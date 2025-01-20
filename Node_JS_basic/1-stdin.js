// Import readline module to handle user input
const readline = require('readline');

// Create an interface to read input from stdin (command line)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display initial prompt message
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the name entered by the user
  console.log(`Your name is: ${name}`);

  // Close the program with a final message
  rl.on('close', () => {
    console.log('This important software is now closing');
  });

  // Close the readline interface to end the program
  rl.close();
});
