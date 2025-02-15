const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const { configs } = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: [
      'dist',
      'node_modules',
      'rush-logs',
      '*.tmp',
      '*.log',
      '.vscode',
      '.idea',
      '.DS_Store',
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': configs,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
