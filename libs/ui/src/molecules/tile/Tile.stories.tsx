import { ComponentProps } from 'react';
import { Container } from '../../Container';

import type { Meta, StoryFn } from '@storybook/react';

import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
  component: Tile,
  title: 'Molecules/Tile',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Title' },
    description: { control: 'text', description: 'Description' },
    links: { control: 'object', description: 'Tile links' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Tile>> = (args) => (
  <Container>
    <Tile {...args} />
  </Container>
);

export const _Tile = Template.bind({});
_Tile.args = {
  title: 'Title',
  description: 'Description',
  links: [
    {
      id: 1,
      prefix: 'First',
      label: 'example1.com',
      url: 'https://example1.com',
    },
    {
      id: 2,
      prefix: 'Second',
      label: 'example2.com',
      url: 'https://example2.com',
    },
  ],
};
