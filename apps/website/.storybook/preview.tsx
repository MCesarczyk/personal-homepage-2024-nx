import React from 'react';
import type { Preview } from '@storybook/react';
import { StoryBackground } from '@ph24/ui';
import '../src/app/global.css';

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
