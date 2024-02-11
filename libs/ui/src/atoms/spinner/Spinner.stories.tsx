import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { Spinner } from './Spinner';
import { Container } from '../../Container';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Message' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Spinner>> = (args) => (
  <Container>
    <Spinner {...args} />
  </Container>
);

export const _Spinner = Template.bind({});
_Spinner.args = {
  message: 'Please wait while projects are being loaded...',
};
_Spinner.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
