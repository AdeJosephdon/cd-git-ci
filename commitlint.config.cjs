module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case': [2, 'always', 'sentence-case'],
    'header-full-stop': [2, 'always', '.'], // Now expects a period at the end
    'type-empty': [0], // Disable type requirement
    'subject-empty': [0], // Disable subject empty check (for leniency)
  },
};
