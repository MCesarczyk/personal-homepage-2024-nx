import { ComponentProps } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Gallery } from './Gallery';
import { sampleRepositories } from './fixtures';

const meta: Meta<typeof Gallery> = {
  component: Gallery,
  title: 'Organisms/Gallery',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Title' },
    subtitle: { control: 'text', description: 'Subtitle' },
    status: {
      control: 'radio',
      options: ['loading', 'error', 'success'],
      description: 'Status',
    },
    repos: { control: 'disable', description: 'Repositories list' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Gallery>> = (args) => (
  <Gallery {...args} />
);

export const _Gallery = Template.bind({});
_Gallery.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  status: 'success',
  repos: sampleRepositories,
};
_Gallery.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
