import React from 'react';
import type { Preview } from '@storybook/react';
import { StoryBackground } from '../src';
import '../src/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: true,
    },
  },
  decorators: [
    (Story) => (
      <StoryBackground>
        <Story />
      </StoryBackground>
    ),
  ],
};

export default preview;
