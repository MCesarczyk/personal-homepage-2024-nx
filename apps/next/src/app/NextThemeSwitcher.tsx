'use client';

import { useEffect, useState } from 'react';

import { ThemeSwitcher } from '@ui';
import { Theme } from '@types';
import { localStorageService } from '@services';

export const NextThemeSwitcher = () => {
  const initialTheme = localStorageService.getValue('theme', 'light' as Theme);
  const [isDarkTheme, setDarkTheme] = useState(initialTheme === 'dark');

  const onThemeChange = () => {
    setDarkTheme(!isDarkTheme);

    localStorageService.setValue('theme', !isDarkTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  return <ThemeSwitcher {...{ isDarkTheme, toggleDarkTheme: onThemeChange }} />;
};
