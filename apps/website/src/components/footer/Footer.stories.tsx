import type { Meta, StoryFn } from '@storybook/react';
import { type ComponentProps } from 'react';

import { Footer } from './Footer';
import { footerThumbnails } from './footerThumbnailsSample';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Components/Footer',
  tags: ['autodocs'],
  argTypes: {
    address: { control: 'text', description: 'Address' },
    footerThumbnails: { control: 'disabled', description: 'Footer thumbnails' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Footer>> = (args) => (
  <div className="text-gray-950 dark:text-white">
    <Footer {...args} />
  </div>
);

export const _Footer = Template.bind({});
_Footer.args = {
  address: 'lorem.ipsum@dolor.sit',
  cvFileLocation: '/DummyCV.pdf',
  cvFileName: 'John Doe CV.pdf',
  footerThumbnails: footerThumbnails,
};
