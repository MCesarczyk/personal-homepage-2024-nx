'use client';

import { DownloadButton } from '@ph24/ui';
import { ComponentProps } from 'react';

export const ResumeDownloadButton = (
  props: ComponentProps<typeof DownloadButton>
) => {
  return <DownloadButton {...props} />;
};
