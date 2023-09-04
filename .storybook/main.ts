import path from 'node:path';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};
export default config;
