import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';
import styled, { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '../../theme';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'Organisms/ThemeSwitcher',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

const Template: StoryFn<ComponentProps<typeof ThemeSwitcher>> = (args) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <ThemedBackground>
        <ThemeSwitcher {...args} {...{ isDarkTheme, setDarkTheme }} />
      </ThemedBackground>
    </ThemeProvider>
  );
};

export const _ThemeSwitcher = Template.bind({});
_ThemeSwitcher.args = {};
_ThemeSwitcher.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

const ThemedBackground = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
