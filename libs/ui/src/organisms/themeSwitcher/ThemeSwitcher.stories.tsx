import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps, useEffect, useState } from 'react';

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

  const toggleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <div className="text-gray-900 bg-white dark:text-white dark:bg-gray-900 h-full w-full flex items-center justify-center p-6">
      <ThemeSwitcher {...args} {...{ isDarkTheme, toggleDarkTheme }} />
    </div>
  );
};

export const _ThemeSwitcher = Template.bind({});
_ThemeSwitcher.args = {};
_ThemeSwitcher.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
