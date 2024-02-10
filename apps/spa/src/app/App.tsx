import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Section,
  Footer,
  Gallery,
  Header,
  ThemeSwitcher,
  Thumbnail,
  lightMode,
  darkMode,
  GlobalStyle,
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
import { sampleRepositories } from './fixtures';

export const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <GlobalStyle />
      <Container>
        <ThemeSwitcher {...{ isDarkTheme }} setDarkTheme={setDarkTheme} />
        <Header name={AUTHOR_NAME} description={AUTHOR_DESCRIPTION} />
        <Section title={'My skills'} elements={skills} />
        <Section title={'My closest goals'} elements={goals} />
        <Gallery
          title={'Portfolio'}
          subtitle={'My recent projects'}
          status="success"
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
            <Thumbnail {...thumbnail} {...{ isDarkTheme }} />
          ))}
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export const Container = styled.div`
  height: 100%;
  padding: 48px 24px;
  max-width: 1000px;
  margin: 0 auto;
`;
