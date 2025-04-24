module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-min-length': [2, 'always', 20],
    'header-case': [2, 'always', 'sentence-case'],
    'subject-full-stop': [0], // Disable this conflicting built-in rule
    'type-empty': [0], // Optional: allow skipping feat:, fix:, etc.
    'subject-empty': [0], // Optional: allow messages without a subject
  },
};
