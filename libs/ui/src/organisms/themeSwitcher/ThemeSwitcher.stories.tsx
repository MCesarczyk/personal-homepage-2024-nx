import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: 'Organisms/ThemeSwitcher',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

const Template: StoryFn<ComponentProps<typeof ThemeSwitcher>> = (args) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return <ThemeSwitcher {...args} {...{ isDarkTheme, setDarkTheme }} />;
};

export const _ThemeSwitcher = Template.bind({});
_ThemeSwitcher.args = {};
_ThemeSwitcher.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
