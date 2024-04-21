import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const StoryBackground = ({ children }: ContainerProps) => (
  <div className="flex flex-col justify-center items-center w-full min-h-fit p-12 my-0 mx-auto text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900">
    {children}
  </div>
);
