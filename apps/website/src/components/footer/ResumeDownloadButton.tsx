'use client';

import { DownloadButton } from '@personal-homepage-2024-nx/ui';
import { ComponentProps } from 'react';

export const ResumeDownloadButton = (
  props: ComponentProps<typeof DownloadButton>
) => {
  return <DownloadButton {...props} />;
};
