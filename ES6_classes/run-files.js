import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get the current directory of the module using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Get the file name from command-line arguments (e.g., npm run dev 2-main.js)
const args = process.argv.slice(2); // Remove first two args (node and script path)
const fileToRun = args[0]; // Get the file name from the first argument

if (!fileToRun) {
  console.log('Please specify a file to run, e.g., npm run dev 2-main.js');
  process.exit(1); // Exit if no file is provided
}

// Check if the specified file exists
const filePath = path.join(__dirname, fileToRun);

if (fs.existsSync(filePath) && fileToRun.endsWith('.js')) {
  try {
    console.log(`Running ${fileToRun}...`);
    execSync(`node ${filePath}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Error executing file ${fileToRun}:`, err);
  }
} else {
  console.error(`File ${fileToRun} not found or not a valid .js file.`);
}
