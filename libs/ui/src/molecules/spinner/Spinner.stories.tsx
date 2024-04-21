import type { Meta, StoryFn } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Molecules/Spinner',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Message' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Spinner>> = (args) => (
  <Spinner {...args} />
);

export const _Spinner = Template.bind({});
_Spinner.args = {
  message: 'Please be patient...',
};
_Spinner.parameters = {
  backgrounds: {
    default: 'light',
  },
};
