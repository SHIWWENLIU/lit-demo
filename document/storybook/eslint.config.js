import { fileURLToPath } from 'node:url'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig([
  {
    ignores: ['dist', 'storybook-static', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  prettier,
])
