module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Require subject (header) to be at least 20 characters
    'header-min-length': [2, 'always', 20],

    // Enforce capitalized start
    'header-case': [2, 'always', 'sentence-case'],

    // Disallow ending with period
    'header-full-stop': [2, 'never', '.'],
  },
};
