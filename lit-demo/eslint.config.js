import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import pluginLit from "eslint-plugin-lit";
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: [
      '**/node_modules/*',
      '**/build/*',
      '**/.husky/*',
      'eslint.config.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  tseslint.configs.recommended,
  pluginLit.configs["flat/recommended"],
])
