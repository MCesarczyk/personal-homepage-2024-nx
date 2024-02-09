import { ComponentProps } from 'react';
import { Container } from '../../styled';

import type { Meta, StoryFn } from '@storybook/react';

import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
  component: Tile,
  title: 'Molecules/Tile',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Title' },
    description: { control: 'text', description: 'Description' },
    demoLink: { control: 'text', description: 'Demo link' },
    codeLink: { control: 'text', description: 'Code link' },
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
  demoLink: 'https://example1.com',
  codeLink: 'https://example2.com',
};
