import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist', 'node_modules'],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsConfigs,
    },
    extends: [
      '../../../../eslint.config.js',
      'plugin:@typescript-eslint/recommended',
    ],
    env: {
      node: true,
    },
  },
];
