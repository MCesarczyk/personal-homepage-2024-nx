import { useEffect, useState } from 'react';

import {
  Section,
  Footer,
  Gallery,
  Header,
  ThemeSwitcher,
  Thumbnail,
} from '@ui';

import {
  ADDRESS,
  AUTHOR_DESCRIPTION,
  AUTHOR_NAME,
  FOOTER_NOTE,
  skills,
  goals,
  thumbnails,
} from '../assets/data';
import { sampleRepositories } from '../assets/data/repositories';
import { localStorageService } from './localStorageService';
import { AppState } from './types';

type Theme = 'light' | 'dark';

export const App = () => {
  const initialTheme = localStorageService.getValue('theme', 'light' as Theme);
  const [isDarkTheme, setDarkTheme] = useState(initialTheme === 'dark');
  const [state, setState] = useState<AppState>('loading');

  const onThemeChange = () => {
    setDarkTheme(!isDarkTheme);

    localStorageService.setValue('theme', !isDarkTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  useEffect(() => {
    setTimeout(() => {
      setState('success');
    }, 3_000);
  }, []);

  return (
    <div className="h-full py-12 px-6 max-w-5xl my-0 mx-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <ThemeSwitcher
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={onThemeChange}
      />
      <Header name={AUTHOR_NAME} description={AUTHOR_DESCRIPTION} />
      <Section title={'My skills'} elements={skills} />
      <Section title={'My closest goals'} elements={goals} />
      <Gallery
        title={'Portfolio'}
        subtitle={'My recent projects'}
        status={state}
        repos={sampleRepositories.map((repo) => ({
          id: repo.id,
          name: repo.title,
          description: repo.description,
          codeLink: repo.html_url,
          demoLink: repo.homepage,
        }))}
      />
      <Footer note={FOOTER_NOTE} address={ADDRESS}>
        {thumbnails.map((thumbnail) => (
          <Thumbnail {...thumbnail} />
        ))}
      </Footer>
    </div>
  );
};
