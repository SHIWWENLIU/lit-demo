import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|js)'],
  addons: [
    '@storybook/addon-essentials', 
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    const aliases =
      typeof config.resolve?.alias === 'object' && !Array.isArray(config.resolve.alias)
        ? config.resolve.alias
        : {};

    config.resolve = {
      ...(config.resolve ?? {}),
      alias: {
        ...aliases,
        '@shawnlll/lit-demo': resolve(
          __dirname,
          '../../..',
          'packages/lit-demo/src/index.ts'
        ),
      },
    };
    return config;
  },
};

export default config;
