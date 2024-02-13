import {
  // ThemeSwitcher,
  Header,
  Section,
  Gallery,
  Footer,
  Thumbnail,
  footerThumbnails,
} from '@ui';

import {
  ADDRESS,
  AUTHOR_DESCRIPTION,
  AUTHOR_NAME,
  FOOTER_NOTE,
  skills,
  goals,
  sampleRepositories,
  portrait,
} from '@assets';
import Image from 'next/image';

export default async function Index() {
  return (
    <div className="h-full py-12 px-6 max-w-5xl my-0 mx-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* <ThemeSwitcher isDarkTheme={true} toggleDarkTheme={() => console.log('theme-switch')} /> */}
      <Header
        name={AUTHOR_NAME}
        description={AUTHOR_DESCRIPTION}
        Portrait={
          <Image src={portrait} alt="portrait" width={384} height={512} />
        }
      />
      <Section title={'My skills'} elements={skills} />
      <Section title={'My closest goals'} elements={goals} />
      <Gallery
        title={'Portfolio'}
        subtitle={'My recent projects'}
        status={'success'}
        repos={sampleRepositories.map((repo) => ({
          id: repo.id,
          name: repo.title,
          description: repo.description,
          codeLink: repo.html_url,
          demoLink: repo.homepage,
        }))}
      />
      <Footer note={FOOTER_NOTE} address={ADDRESS}>
        {footerThumbnails.map((thumbnail) => (
          <Thumbnail key={thumbnail.id} {...thumbnail} />
        ))}
      </Footer>
    </div>
  );
}
