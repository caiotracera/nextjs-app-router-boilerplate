import React from 'react';

import { StoryFn } from '@storybook/react';

import { GlobalStyles } from '../src/styles/global';

export const decorators = [
  (Story: StoryFn) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
