import globals from "globals";
import eslintRecommended from "@eslint/js"; // Import the recommended config directly

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node, // Define Node.js globals without "env"
    },
    ...eslintRecommended.configs.recommended, // Include eslint:recommended directly
    rules: {
      "no-console": "warn",
      // Add any other custom rules here
    },
  },
];
