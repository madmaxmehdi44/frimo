module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['deprecation'],
  // For eslint-plugin-deprecation:
  // https://stackoverflow.com/a/64488474/10876256
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        // for eslint-plugin-deprecation
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    'prettier/prettier': 'warn',
    'deprecation/deprecation': 'warn',
    'no-console': 'warn',
    'no-alert': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'object-shorthand': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
  },
};
