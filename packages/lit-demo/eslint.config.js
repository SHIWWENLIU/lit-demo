import { fileURLToPath } from 'node:url'
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import pluginLit from 'eslint-plugin-lit'
import prettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig([
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js', '.husky', 'build'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  pluginLit.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  prettier,
])
