import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Atoms/Link',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  }
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Link>> = (args) => (
  <Link {...args} />
);

export const _Link = Template.bind({});
_Link.args = {
  children: 'Link',
};
