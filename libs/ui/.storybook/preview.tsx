import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/GlobalStyle';
import { darkMode } from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms'],
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkMode}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
