import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { Gallery } from './Gallery';

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
  repos: [
    {
      id: 1,
      name: 'Repository 1',
      description: 'Description 1',
      homepage: 'https://example1.com',
      html_url: 'https://example1.com',
    },
    {
      id: 2,
      name: 'Repository 2',
      description: 'Description 2',
      homepage: 'https://example2.com',
      html_url: 'https://example2.com',
    },
  ],
};
_Gallery.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
