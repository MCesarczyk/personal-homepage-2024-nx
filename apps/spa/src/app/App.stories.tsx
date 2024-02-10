import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { App } from './App';

const meta: Meta<typeof App> = {
  component: App,
  title: 'Views/App',
  argTypes: {
    title: { control: 'text', description: 'Main title' },
    elements: { control: 'array', description: 'Main list items' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof App>> = (args) => (
  <App />
);

export const _App = Template.bind({});
_App.args = {
  title: 'Main',
  elements: ['Item 1', 'Item 2', 'Item 3'],
};
_App.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
