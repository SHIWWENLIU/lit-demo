import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    build: isBuild
      ? {
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'LitDemo',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format}.js`,
          },
          rollupOptions: {
            external: ['lit', 'lit-html'],
          },
        }
      : undefined,
  };
});
