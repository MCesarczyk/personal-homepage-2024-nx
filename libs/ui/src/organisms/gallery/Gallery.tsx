import styled from 'styled-components';

import GithubLogo from './githubLogo.svg';
import { Spinner } from '../../atoms/spinner';
import { ErrorMessage } from '../../molecules/errorMessage';
import { Tile } from '../../molecules/tile';
import { Repo } from '../../organisms/gallery/types';

interface GalleryProps {
  title: string;
  subtitle: string;
  status: 'loading' | 'error' | 'success';
  repos: Repo[];
}

export const Gallery = ({ title, subtitle, status, repos }: GalleryProps) => {
  return (
    <GalleryWrapper>
      <GalleryLogoWrapper>
        <GalleryLogo>
          <img src={GithubLogo} alt="" />
        </GalleryLogo>
      </GalleryLogoWrapper>
      <GalleryHeader>{title}</GalleryHeader>
      <GallerySubtitle>{subtitle}</GallerySubtitle>
      {status === 'loading' && <Spinner message='be patient... ' />}
      {status === 'error' && (
        <ErrorMessage
          address="lorem.ipsum@mail.co"
          errorDescription="Something bad happened..."
          errorMessage="Ooops..."
        />
      )}
      {status === 'success' && (
        <GalleryTilesContainer>
          {repos.map((repo) => (
            <Tile
              key={repo.id}
              title={repo.name || 'n/a'}
              description={repo.description || 'n/a'}
              demoLink={repo.homepage || 'n/a'}
              codeLink={repo.html_url || 'n/a'}
            />
          ))}
        </GalleryTilesContainer>
      )}
    </GalleryWrapper>
  );
};

export const GalleryWrapper = styled.div`
  text-align: center;
  margin-bottom: 120px;
`;

export const GalleryLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GalleryLogo = styled.div`
  width: 40px;
  margin: 12px;
  transition: 1s;

  &:hover {
    filter: brightness(150%);
    transform: scale(120%);
  }
`;

export const GalleryHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
`;

export const GallerySubtitle = styled.p`
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 17px;
  }
`;

export const GalleryTilesContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
