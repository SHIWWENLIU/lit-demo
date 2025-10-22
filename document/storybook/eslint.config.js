import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'storybook-static'],
  },
  js.configs.recommended,
  prettier,
];
