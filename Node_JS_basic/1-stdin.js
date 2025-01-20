const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the prompt if the input is from the terminal (TTY)
console.log('Welcome to Holberton School, what is your name?');

// Check if the input is from the terminal
if (process.stdin.isTTY) {
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
} else {
  // If input is piped, we just read the data and skip the question
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    rl.close();
  });
}

// Display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
